import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import Number from './Number';
import HomeAboutImg from "../../../assets/HomeAbout.png"




const HomeAbout = () => {

    const [triggerScroll, setTriggerScroll] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setTriggerScroll(true)} onExit={() => setTriggerScroll(false)} >


            <div className='max-w-[1400px] mx-auto'>
            <div className=' rounded-2xl  bg-[#1F1F1F] py-6 my-[2rem]  text-[#fff] flex md:flex-row flex-col justify-center items-center gap-[2rem] px-3 sm:px-[3rem] md:justify-between  '>
                <div className='   w-full md:w-1/2 h-full flex gap-[1rem] lg:gap-[3rem] flex-col justify-center'>
                    <div className=' '>
                        <Fade direction='down' >
                            <h3 className=' text-2xl lg:text-3xl md:text-start text-center font-semibold mb-4 '>About Brandio</h3>
                        </Fade>
                        <p className='md:text-start lg:text-base text-sm font-medium text-center'>As a dedicated branding agency, we specialize in crafting
                            compelling brand identities and design solutions that resonate
                            with audiences, leaving a lasting impression. Our passion lies in
                            helping businesses define and express their unique essence
                            through strategic branding.
                        </p>
                    </div>
                    <div className=' grid grid-cols-2 sm:gap-2 gap-4 sm:grid-cols-4 place-items-center md:place-items-start '>
                        <Number scrolltrigger={triggerScroll} number="50" title="Project Done" />
                        <Number scrolltrigger={triggerScroll} number="100" title="Happy Clients" />
                        <Number scrolltrigger={triggerScroll} number="20" title="Expert Team" />
                        <Number scrolltrigger={triggerScroll} number="5" title="Experienced" />
                    </div>
                </div>


                <div className= ' w-full md:w-1/2'>
                    <img src={HomeAboutImg} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
            </div>

        </ScrollTrigger>
    )
}

export default HomeAbout
