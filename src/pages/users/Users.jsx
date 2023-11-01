import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Users.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userOrderData } from '../../dummyData';
import { Link } from 'react-router-dom';








const Users = () => {
  const [userData, setUserData] = useState(userOrderData)

  const handleDelete = (id) => {
    setUserData(userData.filter(user=>user.id!==id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
        return (
          <div className='userListImageContainer'>
            <img className='userListImage' src={params.row.profileImage} alt='' />
            {params.row.customer}
          </div>
        )
      }
    },
    { field: 'price', headerName: 'Order Value', width: 220 },
    { field: 'status', headerName: 'Status', width: 220 },
    { field: 'quantity', headerName: 'Quantity', width: 220 },
    {
      field: 'actions', headerName: 'Actions', width: 220, renderCell: (params) => {
        return (
          <div className='userTableActions'>
            <Link to={'/user/'+params.row.id}><EditIcon className='userTableEditButton' /></Link>
            <DeleteOutlineIcon className='userTableDeleteButton' onClick={function(){handleDelete(params.row.id)}} />
          </div>
        )
      }
    }
  ]

  
  return (
    <div className='userListContainer'>
      <div className='usersListTable'>
        <DataGrid
          disableRowSelectionOnClick
          rows={userData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Users