import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLater from '../components/NewsLater'

const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t px-4 md:px-12 lg:px-20">
      <Title text1={'ABOUT'} text2={'Us'} />
      <div className="my-10 flex flex-col md:flex-row items-center gap-16">
        <img
          className='w-full md:max-w-[450px] rounded-md shadow-md'
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-start items-start gap-6 md:w-2/4 text-gray-600 text-sm leading-relaxed text-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rerum quo delectus quam esse quae maiores sint, nisi magni unde! Ratione vel, minima minus autem nobis ut distinctio. Nesciunt nihil sit provident iure impedit, maxime animi odit nulla expedita molestiae?
          </p>
          <p>
            Quas doloremque rerum velit explicabo tempore. Fugit nostrum eum dicta voluptate inventore asperiores aspernatur, exercitationem dignissimos reiciendis! Nostrum libero vitae quae accusamus.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptates saepe qui. Eius dolor perferendis consequatur illum doloremque libero! Sit quaerat dicta ducimus non, totam possimus. Nulla obcaecati possimus eius.</p>
        </div>
      </div>
      <div className="text-2xl py-4 text-start">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-start text-sm mb-20">
        <div className="border px-10 text-start md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt maiores vitae hic vel aliquam? Veritatis mollitia quae maiores, natus dolore, doloribus accusamus quibusdam, ipsam voluptas ipsa tenetur. Voluptatibus, dolorum!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenice:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt maiores vitae hic vel aliquam? Veritatis mollitia quae maiores, natus dolore, doloribus accusamus quibusdam, ipsam voluptas ipsa tenetur. Voluptatibus, dolorum!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptionaol customer service :</b>
          <p className='text-gray-600'> Quas doloremque rerum velit explicabo tempore. Fugit nostrum eum dicta voluptate inventore asperiores aspernatur, exercitationem dignissimos reiciendis! Nostrum libero vitae quae accusamus.!</p>
        </div>
      </div>
      <NewsLater />
    </div>
  )
}

export default About
