import React, { useState } from 'react'
import Card from '../../Component/Portfolio_Card/Card'
import PortfolioFront1 from "../../assets/PortfolioFront1.png"
import PortfolioFront2 from "../../assets/PortfolioFront2.png"
import PortfolioFront3 from "../../assets/PortfolioFront3.png"
import PortfolioFront4 from "../../assets/PortfolioFront4.png"
import PortfolioFront5 from "../../assets/PortfolioFront5.png"
import PortfrolioBackFirst1 from "../../assets/PortfolioBackFirst1.png"
import PortfrolioBackFirst2 from "../../assets/PortfolioBackFirst2.png"
import PortfrolioBackFirst3 from "../../assets/PortfolioBackFirst3.png"
import PortfrolioBackFirst4 from "../../assets/PortfolioBackFirst4.png"
import PortfrolioBackFirst5 from "../../assets/PortfolioBackFirst5.png"
import PortfrolioBackFirst6 from "../../assets/PortfolioBackFirst6.png"

import PortfrolioBackSecond1 from "../../assets/PortfolioBackSecond1.png"
import PortfrolioBackSecond2 from "../../assets/PortfolioBackSecond2.png"
import PortfrolioBackSecond3 from "../../assets/PortfolioBackSecond3.png"
import PortfrolioBackSecond4 from "../../assets/PortfolioBackSecond4.png"
import PortfrolioBackSecond5 from "../../assets/PortfolioBackSecond5.png"
import PortfrolioBackSecond6 from "../../assets/PortfolioBackSecond6.png"

import PortfrolioBackThird1 from "../../assets/PortfolioBackThird1.png"
import PortfrolioBackThird2 from "../../assets/PortfolioBackThird2.png"
import PortfrolioBackThird3 from "../../assets/PortfolioBackThird3.png"
import PortfrolioBackThird4 from "../../assets/PortfolioBackThird4.png"
import PortfrolioBackThird5 from "../../assets/PortfolioBackThird5.png"
import PortfrolioBackThird6 from "../../assets/PortfolioBackThird6.png"

import PortfrolioBackForth1 from "../../assets/PortfolioBackForth1.png"
import PortfrolioBackForth2 from "../../assets/PortfolioBackForth2.png"
import PortfrolioBackForth3 from "../../assets/PortfolioBackForth3.png"
import PortfrolioBackForth4 from "../../assets/PortfolioBackForth4.png"
import PortfrolioBackForth5 from "../../assets/PortfolioBackForth5.png"
import PortfrolioBackForth6 from "../../assets/PortfolioBackForth6.png"

import PortfrolioBackFive1 from "../../assets/PortfolioBackFive1.png"
import PortfrolioBackFive2 from "../../assets/PortfolioBackFive2.png"
import PortfrolioBackFive3 from "../../assets/PortfolioBackFive3.png"
import PortfrolioBackFive4 from "../../assets/PortfolioBackFive4.png"
import PortfrolioBackFive5 from "../../assets/PortfolioBackFive5.png"
import PortfrolioBackFive6 from "../../assets/PortfolioBackFive6.png"
import { Fade } from 'react-awesome-reveal'



const Portfolio = () => {


  return (
    <div className='bg-[#28292A] text-[#fff] '>

      <div className=' bg-gradient-to-r from-[#3C4951] to-[#09324B] font-Syne w-full h-[430px] flex items-center justify-center flex-col '>
        <Fade direction='up'>
        <p className='text-1rem font-semibold '>Our attractive Design is ready for you </p>
        <h3 className=' text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-semibold '>BRANDIO PORTFOLIO</h3>
        </Fade>
      </div>

      <div className='py-6 max-w-[1300px] mx-auto px-3 '>
        <h4 className='text-center text-[1.3rem] font-semibold mb-[2rem] '>Some of our working sample which blowing you</h4>

        <div className='flex justify-center flex-wrap gap-4 '>
          
          <Card backimgs={true} frontTitle="Logo Design" backTitle="Logo Design" frontImg={PortfolioFront1} backImg1={PortfrolioBackFirst1} backImg2={PortfrolioBackFirst2} backImg3={PortfrolioBackFirst3} backImg4={PortfrolioBackFirst4} backImg5={PortfrolioBackFirst5} backImg6={PortfrolioBackFirst6} />
          <Card backimgs={true} frontTitle="Stationary Design" backTitle="Stationary Design" frontImg={PortfolioFront2} backImg1={PortfrolioBackSecond1} backImg2={PortfrolioBackSecond2} backImg3={PortfrolioBackSecond3} backImg4={PortfrolioBackSecond4} backImg5={PortfrolioBackSecond5} backImg6={PortfrolioBackSecond6} />
          <Card backimgs={true} frontTitle="Social Media Banner" backTitle="Social Media Banner" frontImg={PortfolioFront3} backImg1={PortfrolioBackThird1} backImg2={PortfrolioBackThird2} backImg3={PortfrolioBackThird3} backImg4={PortfrolioBackThird4} backImg5={PortfrolioBackThird5} backImg6={PortfrolioBackThird6} />
          <Card backimgs={true} frontTitle="Product Design" backTitle="Product Packaging Design" frontImg={PortfolioFront4} backImg1={PortfrolioBackForth1} backImg2={PortfrolioBackForth2} backImg3={PortfrolioBackForth3} backImg4={PortfrolioBackForth4} backImg5={PortfrolioBackForth5} backImg6={PortfrolioBackForth6} />
          <Card backimgs={true} frontTitle="T-Shirt Design" backTitle="T-Shirt Design" frontImg={PortfolioFront5} backImg1={PortfrolioBackFive1} backImg2={PortfrolioBackFive2} backImg3={PortfrolioBackFive3} backImg4={PortfrolioBackFive4} backImg5={PortfrolioBackFive5} backImg6={PortfrolioBackFive6} />
          <Card backimgs={false} frontTitle="Motion Graphics" backTitle="Motion Graphics" frontImg="https://i.pinimg.com/originals/2e/a7/f5/2ea7f5d29b0fe88cc8e1c93bb50d3c40.gif" backImg1={PortfrolioBackFirst1} backImg2={PortfrolioBackFirst2} backImg3={PortfrolioBackFirst3} backImg4={PortfrolioBackFirst4} backImg5={PortfrolioBackFirst5} backImg6={PortfrolioBackFirst6} />

        </div>


      </div>

    </div>
  )
}

export default Portfolio