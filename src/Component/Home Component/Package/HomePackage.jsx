import React from 'react'
import HomeServiceImg from "../../../assets/HomeService.png"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const HomePackage = () => {
    return (
        <div className=' max-w-[1400px] mt-10 mx-auto '>

            <div className='flex md:flex-row flex-col justify-center gap-10 bg-[#1F1F1F] px-3 md:px-[2rem] rounded-2xl py-[2rem]  items-center text-[#fff] '>
                <div className=' w-full md:w-1/2 '>
                    <img src={HomeServiceImg} alt="" className='w-full h-full object-cover' />
                </div>
                <div className=' w-full flex flex-col md:text-left text-center md:justify-start justify-center items-center md:items-start md:w-1/2 '>
                    <div className=' mb-10 '>
                        <Fade direction='down' >
                        <h2 className=' text-2xl md:text-3xl font-bold '>Enroll for Monthly Design</h2>
                        </Fade>
                        <p className=' text-sm  md:text-base mt-4 font-medium '>Explore your brand with our monthly design subscription service.
                            Our experienced and creative designers are dedicated to bringing
                            your vision to life. Choose from our flexible pricing plans that suits
                            your needs.</p>
                    </div>
                    <Link to={"/packages"} className=' '>
                        <button className='bg-[#34363A] hover:bg-[#4d5056] transition duration-300 ease-in-out w-[12rem] flex items-center justify-center text-base h-[2.5rem] rounded-md '>Explore Plan</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePackage