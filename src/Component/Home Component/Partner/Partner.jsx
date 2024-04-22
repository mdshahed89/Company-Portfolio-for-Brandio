import React from 'react'
import Partner1 from "../../../assets/Partner1.png"
import Partner2 from "../../../assets/Partner2.png"
import Partner3 from "../../../assets/Partner3.png"
import Partner4 from "../../../assets/Partner4.png"
import Partner5 from "../../../assets/Partner5.png"
import Partner6 from "../../../assets/Partner6.png"
import Partner7 from "../../../assets/Partner7.png"
import Partner8 from "../../../assets/Partner8.png"
import { Fade } from 'react-awesome-reveal'

const Partner = () => {
  return (
    <div className='max-w-[1100px] mx-auto mt-6 mb-10 px-5 '>
        <div className='text-center '>
            <Fade direction='down' >
            <h2 className='text-3xl font-semibold text-[#fff]  '>Few Branding Partner</h2>
            <p className='text-[#FFFFFF] mt-2 font-medium '>Brands are the cultural connection between companies and their communities.</p>
            </Fade>
        </div>

        <div className='grid grid-cols-2 mt-[3rem] mb-[5rem] md:grid-cols-4 place-items-center gap-7 md:gap-5 '>
            <div className='mt-6'>
                <img src={Partner1} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner2} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner3} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner4} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner5} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner6} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner7} alt="" className=' w-[80%] md:w-full' />
            </div>
            <div className='mt-6'>
                <img src={Partner8} alt="" className=' w-[80%] md:w-full' />
            </div>

        </div>

    </div>
  )
}

export default Partner