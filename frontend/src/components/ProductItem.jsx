import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id , image , name , price}) => {
    const {currency} = useContext(ShopContext)
    
    
    
  return (
    <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
      <div className="overflow-hidden hover:scale-105 
       duration-500 border-gray-300 border-2  rounded-md transition ease-in-out">
        <img src={image[0]} alt="" />
        <p className='pt-3 pl-2 pb-1 text-sm'>{name}</p>
        <p className="text-sm pl-2 font-medium">{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
