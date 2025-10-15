import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
        <div className=''>
          <img src={assets.logo} className='w-32 mb-5' alt="" />
          <p className='w-full md:w-2/3 text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
        </div>
        <div className="">
          <h1 className='text-xl font-medium mb-5'>COMPANY</h1>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
          <p className='flex flex-col gap-1 text-gray-600'>+1-000-000-0000</p>
          <p className='text-gray-600'>
            manojojha154@gmail.com
            Instagram</p>
        </div>
      </div>
      <div className="">
        <hr className='mb-6 mt-10 border-b-2 w-full' />
        <div className=" mb-6 text-center">
          <h2>© 2025 Manoj Ojha – Built with passion. All rights reserved.</h2>
        </div>
      </div>
    </>
  )
}

export default Footer
