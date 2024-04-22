import React from 'react'
import AboutImg from "../../assets/AboutImg.png"
import AboutImg1 from "../../assets/aboutImg2.png"
import AboutImg2 from "../../assets/aboutImg3.png"
import { Fade } from "react-awesome-reveal";


const About = () => {
  return (
    <div className=' bg-[#28292A] '>
      <div className='h-[500px] flex items-center font-Syne flex-col bg-[#313232] justify-center '>
        <Fade direction='up'>
        <h3 className=' text-base md:text-2xl text-[#FFFFFF] font-semibold '>We are never limited to one </h3>
        <h1 className=' text-3xl md:text-5xl text-[#ADD4FF] font-bold '>SINGLE PLATFORM</h1>
        </Fade>
      </div>

      <div className=' max-w-[1320px] mx-auto pb-14  '>

        <div className='flex items-center justify-between md:flex-row flex-col gap-[1rem] py-[3rem] lg:py-[5rem] my-[2rem] rounded-lg px-3 md:px-[2rem] text-[#fff]  bg-[#1F1F1F] '>
          <div className=' w-full md:w-1/2 md:px-7 text-center md:order-1 order-2  '>
            <Fade direction='down'>
            <h3 className='text-2xl font-bold mb-4 '>Who We Are</h3>
            </Fade>
            <p className=' font-medium ' >We believe in the power of strong brands to drive success. As a dedicated branding agency, we specialize in crafting compelling brand identities and design solutions that resonate with audiences, leaving a lasting impression. Our passion lies in helping businesses define and express their unique essence through strategic branding.</p>
          </div>
          <div className='w-full md:w-1/2 lg:order-2 order-1  '>
            <img src={AboutImg} alt="" className='w-full rounded-lg  h-full object-cover' />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 grid-cols-1 '>
          <div className='bg-[#E8EAED] rounded-xl pb-6 '>
            <div className=''>
              <img src={AboutImg1} alt="" className='w-full h-full rounded-t-lg  object-cover' />
            </div>
            <div className='mt-7 text-center py-[1rem] px-[4%] '>
              <Fade direction='down'>
              <h3 className='text-xl font-semibold'>Mission</h3>
              </Fade>
              <p className='text-sm mt-4 '>Our mission is to empower businesses to make a lasting impact through strategic and visually compelling brand design. We are committed to understanding the unique essence of each brand we work with, translating their values into captivating visuals, and providing solutions that resonate with their target audience.</p>
            </div>
          </div>

          <div className='bg-[#CEEAD6] rounded-xl pb-6'>
            <div className=''>
              <img src={AboutImg2} alt="" className='w-full h-full rounded-t-lg object-cover ' />
            </div>
            <div className='mt-7 text-center py-[1rem] px-[4%] '>
              <Fade direction='down'>
              <h3 className='text-xl font-semibold'>Vision</h3>
              </Fade>
              <p className='text-sm mt-4 '>Our vision at Brandio is to be recognized as a premier design agency that transforms concepts into iconic brands. We aspire to set industry standards for creativity, innovation, and client satisfaction. We envision a future where businesses, regardless of their size or industry, turn to us as the trusted partner in crafting meaningful brand experiences.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About