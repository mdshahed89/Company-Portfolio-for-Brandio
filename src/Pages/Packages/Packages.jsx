import React from 'react'
import PackageBanner from "../../assets/PackageBanner.png"
import "./Package.css"
import PackageCard from '../../Component/Package_Card/PackageCard'
import PackageImg from "../../assets/PackageImg.png"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const Packages = () => {
  return (
    <div className=' bg-[#28292A] '>

      <div className=' text-[#fff] py-10 '>
        <div className='h-[430px] w-full mx-auto relative '>
          <img src={PackageBanner} alt="" className=' w-full h-full object-cover ' />
          <div className='absolute cover font-Syne  top-0 w-full h-full flex flex-col justify-center items-center '>
            <Fade direction='up'>
            <h3 className=' text-lg md:text-2xl font-semibold text-[#fff] ' >Get even more design from </h3>
            <h1 className=' text-2xl mt-1 md:text-5xl  font-semibold text-[#ADD4FF] '>BRANDIO PLATFORM.</h1>
            </Fade>
          </div>
        </div>
        <div className=' max-w-[1400px] px-3 mx-auto '>
          <div className=' py-[3rem] text-center '>
            <Fade direction='down'>
            <h3 className=' text-xl mb-2 md:text-3xl font-semibold text-[#fff] '>Choose a plan that works for you.</h3>
            <h4 className=' text-xs md:text-sm text-[#fff] '>Elevate your brand experience with our exclusive subscription packages.</h4>
            </Fade>
          </div>



          <div className=' grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 '>
            
            <PackageCard priceDirection="left" priceColor="text-[#8cb0f5]" pckgTitle="Brand Essential" ft1="Social Account Pro Setup" ft2="Six (6) Social Media Banner" ft3="Two (2) Motion Graphics" ft4="1 Video Reels" ft5="Relevant Content for each design" btn={false} price="5000" />
           
            <PackageCard priceDirection="up" priceColor="text-[#8cd6f5]" pckgTitle="Brand Pro" ft1="Social Account Pro Setup" ft2="Ten (10) Social Media Banner" ft3="Four (4) Motion Graphics" ft4="2 Video Reels" ft5="Relevant Content for each design" ft6="Regular Assessment" ft7="A dedicated Consultation for Brand" ft8="1 SMB for Brand Promotion" btn={true} price="10,000" />
            <PackageCard priceDirection="right" priceColor="text-[#a1f58c]" pckgTitle="Brand Elite" ft1="Social Account Pro Setup" ft2="Twelve (12) Social Media Banner" ft3="Six (6) Motion Graphics" ft4="4 Video Reels" ft5="Relevant Content for each design" ft6="Regular Assessment" ft7="A dedicated Consultation for Brand" ft8="2 SMB for Brand Promotion" ft9="Unlimited Revision to ensure perfection" ft10="24/7 Emergency support for urgent design (Condition Apply)" btn={true} price="15,000" />
          </div>

          <div className='flex items-center md:flex-row flex-col gap-10 justify-center mt-[5rem] rounded-2xl p-3 md:p-[2rem] bg-[#1F1F1F] '>
            <div className=' md:w-1/2'>
              <img src={PackageImg} alt="" className='w-full h-full object-cover  ' />
            </div>

            <div className=' md:w-1/2 flex flex-col gap-[2rem] md:justify-start justify-center md:items-start items-center lg:gap-[5rem] '>
              <div className='md:text-left text-center md:px-0 px-[2rem] '>
                <Fade direction='down'>
                <h3 className=' text-xl md:text-2xl lg:text-3xl font-bold mb-3 '>Ensure your Brand Guideline</h3>
                </Fade>
                <p className=' text-xs lg:text-base font-medium '>You can create full professional brand identity design for your company, which ensures your brand value is high, ensure clear & effective business growth.</p>
              </div>

              <div className=''>
                <Link to={"/contact"} className='flex items-center justify-center w-[12rem] font-semibold hover:bg-[#4d5056] duration-300 transition ease-in-out h-[2.5rem] bg-[#34363A] rounded-md '>Contact</Link>
              </div>

            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Packages