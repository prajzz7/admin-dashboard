import React from 'react'
import {  useLoaderData, useParams } from 'react-router-dom'
import ProductDetailItem from '../productDetailItem/ProductDetailItem'

const ProductDetail = () => {
    const {productId} = useParams()
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
        <ProductDetailItem data={data}/>
    </div>
  )
}

export default ProductDetail

export const loader = async ({request, params}) => {
    const id = params.productId
    const response = await fetch("https://fakestoreapi.com/products/"+id)
    try{
        if(!response.ok){
            throw new Error('Couldn&#39;t fetch the product Data')
        }
        const data = await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }
    
  
}