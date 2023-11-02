import React from 'react'

const ProductDetailItem = ({data}) => {
  const {title, description, rating:{rate}, rating:{count}, image, price} = data
  console.log(title)
  return (
    <div>
        <div>
          <span>{title} </span>
          <span>Rating: {rate} </span>
          <span>Total reviews: {count}</span>
        </div>
        <div >
          <img style={{height:'100px',width:'100px'}} src={image} alt=''></img>
        </div>
        <div>
          Rs. {price}
        </div>
        <div>
          {description}
        </div>
    </div>
  )
}

export default ProductDetailItem