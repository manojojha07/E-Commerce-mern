import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL, curruncy } from '../App'
import { toast } from 'react-toastify';

const ListItems = ({ token }) => {
  const [list, setList] = useState([]);
  const fatchList = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/product/list`, { headers: { token } });
      if(response.data.success){
      setList(response.data.products.reverse())
      }else{
        toast.error(response.data.message)
      }
    } catch (error) { 
      console.log(error);
       toast.error(error.message)
      
    }
  }
  useEffect(() => {
    fatchList()
  }, [])

  const removeItem =async(id) =>{
try {
  // let response = await axios.post(backendURL + '/api/product/remove', {id} ,{headers:{token}})
let response = await axios.post(backendURL + '/api/product/remove', {id})
  if(response.data.success){
  toast.success(response.data.message)
  await fatchList();
}
else{
toast.error(response.data.message)
}
} catch (error) {
  console.log(error);
  toast.error(error.message)
} 
  }

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* ------------list table title ------ */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gary-100 text-m">
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b  className='text-center'>acttion</b>
        </div>
        {/* --------product list */}
        {
          list.map((item,index) => (
            <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border  text-m" key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{curruncy}{item.price}</p>
              <p onClick={() =>removeItem(item._id)}
              className='text-right md:text-center cursor-pointer text-lg'>X</p>
             
            </div>
          ))
        }
      </div>

    </>
  )
}

export default ListItems
