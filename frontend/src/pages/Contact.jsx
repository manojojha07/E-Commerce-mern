import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLater from '../components/NewsLater'

const Contact = () => {
  return (
    <div>
      <div className="text-center  text-2xl pt-10 border-t">
        <Title text1={'CONTACT '} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row   gap-10 mb-28 justify-center">
        <img className='w-full max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-xl text-gray-800"> Our Store</p>
          <p className="text-gray-500">54709 Willms Station  <br />  Suite 350, Washington, USA</p>
          <p className="text-gray-500"> Tel: (415) 555-0132  <br /> Email: admin@forever.com</p>
          <p className="font-semibold text-xl text-gray-800">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className='py-3 px-14 rounded-lg bg-indigo-50
           text-black border-2 hover:bg-black duration-700
           text-xl hover:text-orange-500 '>Explore Jobs</button>
        </div>
      </div>
      <NewsLater />
    </div>
  )
}

export default Contact
