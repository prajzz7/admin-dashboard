import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import './Products.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const Products = () => {
  const productdata = useLoaderData()
  const [productData1, setProductData1] = useState(productdata)

  const handleDelete = (id) => {
    const updatedData = productData1.filter(item=> item.id !== id )
    setProductData1(updatedData)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, overflow: 'none' },
    { field: 'title', headerName: 'Title', width: 500 },
    { field: 'price', headerName: 'Price', width: 120 },
    {
      field: 'category',
      headerName: 'Category',
     
      width: 200,
    },
    {
      field: 'image',
      headerName: 'Image',

      width: 170,
      renderCell: (params) => {
        return (
          <img className='productImage' alt='' src={params.row.image} />
        )
      }
    },
    {
      field: 'actions', headerName: 'Actions', width: 220, renderCell: (params) => {
        return (
          
          <div className='productTableActions'>
            <Link to={`/product/${params.row.id}`}><EditIcon className='productTableEditButton' /></Link>
            <DeleteOutlineIcon className='productTableDeleteButton' onClick={function(){handleDelete(params.row.id)}} />
          </div>

        )
      }
    }
  ];


  return (
    <div className='products' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={productData1}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default Products

export const loader = async () => {

  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error('Fetch failed ')
    }
    const data = await response.json()
    
    return data
  }
  catch (error) {
    console.log(error)
  }





}