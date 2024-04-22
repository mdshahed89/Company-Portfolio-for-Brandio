import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import HomeService1 from "../../../assets/HomeService1.png"
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const Card = ({img, title, description}) => {
  return (
    <div className='text-[#fff] p-5 bg-[#34363A] rounded-xl '>
        <div>
            <Fade direction='up'>
            <h3 className='text-2xl font-semibold  '>{title}</h3>
            </Fade>
            <p className=' text-base font-medium my-5 '>{description}</p>
            <div className='flex items-center transition-all duration-300 ease-in-out my-6 text-[#7FA3DF] '>
                <Link to={"/contact"} className='cursor-pointer font-bold '>
                    <h3>Learn More</h3>
                </Link>
                <FiArrowUpRight className='cursor-pointer ' />
            </div>
        </div>
        <div>
            <img src={img} alt="" className='w-full h-full rounded-lg object-cover' />
        </div>
        
    </div>
  )
}

export default Card