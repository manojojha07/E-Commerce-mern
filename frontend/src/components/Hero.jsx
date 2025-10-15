import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border-t-2 border-gray-400  ">
            {/* hero left side section */}
            {/* if any problam so pl-20 sm:pl-40 propertiy apply div  */}
            <div className="w-full s,:1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141] ">
                    <div className="flex items-center gap-2">
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTDELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrible</h1>
                    <div className="flex items-center gap-2">
                        <p className='font-semibold text-sm md:text-base'> SHOP NOW </p>
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]">  </p>
                    </div>
                </div>
            </div>
            {/* Hero right side section  */}
            <img src={assets.hero_img} className=' w-full sm:w-1/2 ' alt="" />
        </div>
    )
}

export default Hero
