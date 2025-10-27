import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from "../components/NewsLetterBox"
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className=''>
      <div className='text-2xl text-center pt-8'> 
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa mollitia numquam nesciunt nemo? Temporibus, distinctio illo. Fugiat et nostrum quaerat? Asperiores quibusdam enim modi quod voluptate nihil voluptatem deserunt cupiditate? </p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quos blanditiis itaque iusto earum dolores, rem, aliquid maxime at magni possimus libero enim amet? Deserunt harum aliquid quibusdam ab animi?</p>

          <b className='text-gray-500'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quod tempore animi mollitia aspernatur, omnis, exercitationem, dolorum blanditiis ab dignissimos fuga? Eaque soluta veniam, ex perferendis ullam quod officia distinctio.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo impedit quos deserunt quis maxime exercitationem soluta ex animi, sint cumque numquam neque totam eum dolores, beatae similique tenetur fugit.</p>

        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo impedit quos deserunt quis maxime exercitationem soluta ex animi, sint cumque numquam neque totam eum dolores, beatae similique tenetur fugit.</p>

        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo impedit quos deserunt quis maxime exercitationem soluta ex animi, sint cumque numquam neque totam eum dolores, beatae similique tenetur fugit.</p>

        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
