import React from 'react'
import Card from './Card'
import HomeService1 from "../../../assets/HomeService1.png"
import HomeService2 from "../../../assets/HomeService2.png"
import HomeService3 from "../../../assets/HomeService3.png"
import HomeService4 from "../../../assets/HomeService4.png"
import HomeService5 from "../../../assets/HomeService5.png"
import HomeService6 from "../../../assets/HomeService6.png"
import { Fade } from 'react-awesome-reveal'

const Service = () => {
  return (
    <div className=' max-w-[1400px] mx-auto '>
        <Fade direction='down' >
        <h3 className='text-center text-3xl font-semibold text-[#fff] mb-5'>Our Services</h3>
        </Fade>
        <div className='grid sm:grid-cols-2  mx-3 lg:grid-cols-3 gap-5 '>
            <Card img={HomeService1} title="Brand Research" description="We analysis consumer behavior, conducting surveys, studying industry data to develop strategic insights." />
            <Card img={HomeService2} title="Brand Guideline Design" description="We ensure logo usage, color palettes, typography for clear and effective marketing of business." />
            <Card img={HomeService3} title="One Point Design" description="We provide only single design for any entrepreneur or any business according requirement.  " />
            <Card img={HomeService4} title="Motion & Video Editing" description="We ensure motion and video editing which making content engaging & impactful for customers." />
            <Card img={HomeService5} title="Increase sale with DM" description="Making effective ads campaign, boosting & engaging content which increases sales 2-3 times faster. " />
            <Card img={HomeService6} title="Monthly Design Package" description="We provide attractive monthly design package which ensure your business growth consistently. " />
        </div>

    </div>
  )
}

export default Service