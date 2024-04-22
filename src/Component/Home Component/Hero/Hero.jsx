import React from 'react'
import HeroBanner from "../../../assets/HeroBanner.png"
import HeroBannerText from "../../../assets/HeroBannerText.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-[#004A77] relative '>

            <div className='mx-auto max-w-[1550px] h-[440px] '>
                <img
                    src={HeroBanner}
                    alt="Hero Banner"
                    className='w-full h-full object-cover'
                />
                <div className=' absolute top-0 left-0 flex items-center justify-center w-full h-full '>
                    <img src={HeroBannerText} alt="" className=' ' />
                </div>
            </div>



            {/* <div className='absolute  bottom-0 w-full h-full   '> */}
            <Link to={"/contact"} className='absolute top-0 w-full h-full flex items-center justify-center '>
                <button className=' mt-[8rem] rounded-md w-[12rem] font-semibold h-[2.5rem] hover:bg-[#0e5580] transition duration-300 ease-in-out text-[#fff] bg-[#0A4263]'>Contact Us</button>
            </Link>
            {/* </div> */}

        </div>
    )
}

export default Hero