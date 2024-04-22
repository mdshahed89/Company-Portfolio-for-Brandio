import React from 'react'
import HomePortfolio1 from "../../../assets/HomePortfolio1.png"
import HomePortfolio2 from "../../../assets/HomePortfolio2.png"
import HomePortfolio3 from "../../../assets/HomePortfolio3.png"
import HomePortfolio4 from "../../../assets/HomePortfolio4.png"
import HomePortfolio5 from "../../../assets/HomePortfolio5.png"
import HomePortfolio6 from "../../../assets/HomePortfolio6.png"
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const HomePortfolio = () => {
    return (
        <div className=' max-w-[1400px] mx-auto text-[#fff] py-10 '>
            <div className='bg-[#1F1F1F] rounded-lg py-7 '>
                <Fade direction='down'>
                <h3 className=' text-center font-bold text-3xl '>Portfolio at a Glance</h3>
                </Fade>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-0 place-items-center py-5 px-3 md:px-[5rem] lg:px-[10rem] xl:px-[15rem] '>
                    <div>
                        <img src={HomePortfolio1} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={HomePortfolio2} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={HomePortfolio3} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={HomePortfolio4} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={HomePortfolio5} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src={HomePortfolio6} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <Link to={"/portfolio"} ><button className='w-[14rem] h-[2.6rem] hover:bg-[#4d5056] transition duration-300 ease-in-out bg-[#34363A] text-base rounded-md '>Show More Design</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePortfolio