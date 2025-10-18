import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const OurPolicy = () => {
  return (
      <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
                <Title text1={"Our"} text2={"Policy"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sx sm:text-sm md:text-base text-gray-700 '>
          <div className=''>
              <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange Policy.</p>
        </div>
          <div className=''>
              <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>7 days return policy</p>
              <p className='text-gray-400'>We offer 7 days free return Policy.</p>
        </div>
          <div className=''>
              <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
              <p className='font-semibold'>Best Customer Support</p>
              <p className='text-gray-400'>We best customer service.</p>
        </div>
    </div>
    </div>
  )
}

export default OurPolicy
