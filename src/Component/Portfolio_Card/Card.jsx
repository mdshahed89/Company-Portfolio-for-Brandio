import React, { useState } from 'react'
import "./Card.css"
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import PortfolioFront1 from "../../assets/PortfolioFront1.png"
import PortfrolioBackFirst1 from "../../assets/PortfolioBackFirst1.png"
import { Link } from 'react-router-dom';

const Card = ({ frontTitle, backTitle, frontImg, backImg1, backImg2, backImg3, backImg4, backImg5, backImg6, backimgs }) => {

    const [isFliped, setIsFliped] = useState(false)

    const handleClick = () => {
        setIsFliped(!isFliped);

    }

    return (
        <div>


            <div class="maincontainer w-[350px] h-[350px]  sm:w-[500px] md:w-[600px] sm:h-[400px] md:h-[500px] ">

                <div class={` ${isFliped === true ? "rotate" : null} thecard`}>

                    <div class="thefront flex flex-col justify-between p-[1rem] ">
                        <h3 className=' text-[1.2rem] font-semibold '>{frontTitle}</h3>
                        <div >
                            <img src={frontImg} alt="" className='w-full rounded-lg sm:h-[250px] h-[200px] md:h-[343px] object-cover' />
                        </div>
                        <div className='flex items-center justify-end '>
                            <button onClick={handleClick} className='p-1 border-[3.5px] rounded-full border-[#7FA3DF] '><FaPlus className='text-[#7FA3DF]  ' /></button>
                        </div>

                    </div>

                    <div class="theback flex flex-col justify-between p-[1rem]">
                        <h3 className=' text-[1.2rem] font-semibold '>{backTitle}</h3>

                        {
                            backimgs ?
                                <div className='grid grid-cols-3 gap-3 '>
                                    <img src={backImg1} alt="" className='' />
                                    <img src={backImg2} alt="" className='' />
                                    <img src={backImg3} alt="" className='' />
                                    <img src={backImg4} alt="" className='' />
                                    <img src={backImg5} alt="" className='' />
                                    <img src={backImg6} alt="" className='' />
                                </div>
                                :

                                <div className='bg-[#1F1F1F] w-full rounded-lg sm:h-[250px] h-[200px] md:h-[343px] flex items-center justify-center px-[10%] sm:px-[17%] '>
                                    <div className=''>
                                        <h3 className='text-center font-bold mb-[1.5rem] '>Our Customer attracted Motion & Video Portfolio is ready for your visualization</h3>
                                        <div className='flex items-center justify-center'>
                                            <Link target='_blank' to={"https://drive.google.com/drive/folders/1NzlOSwU7kkOKKBH_PtPVP6Kr5qw-WpNL?usp=sharing"} className=' bg-[#34363A] px-10 text-sm py-2  rounded-md '>Watch Video</Link>
                                        </div>
                                    </div>
                                </div>

                        }

                        <div className='flex items-center justify-end '>
                            <button onClick={handleClick} className='p-1  rounded-full border-[#7FA3DF] '><RxCrossCircled className='text-[#7FA3DF] text-4xl ' /></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card