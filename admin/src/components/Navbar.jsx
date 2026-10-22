import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';



const Navbar = ({setToken}) => {

  const logOutAdmin = () => {
    const token = setToken('');
    if(!token){
      toast.success("Lgout successful");
    }
  }
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm sm:text-sm'
       onClick={logOutAdmin}>Logout</button>
    </div>
  )
}

export default Navbar
       
       
