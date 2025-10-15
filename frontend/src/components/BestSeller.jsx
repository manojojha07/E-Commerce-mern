import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestseller , setBestSeller] = useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item)=> (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className=" py-8 text-center text-3xl" >
             <Title text1={"BEST" } text2={"SELLER'S"}/>
        <p className="w-4/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque provident facilis animi amet iure?</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestseller.map((item , index) => (
            <ProductItem key={item.id || item._id}  id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
     </div>
    </div>
  )
}

export default BestSeller
