import React from 'react'
import Hero from '../../Component/Home Component/Hero/Hero'
import Partner from '../../Component/Home Component/Partner/Partner'
import HomeAbout from '../../Component/Home Component/Home_About/HomeAbout'
import HomePortfolio from '../../Component/Home Component/Home_Portfolio/HomePortfolio'
import HomePackage from '../../Component/Home Component/Package/HomePackage'
import Service from '../../Component/Home Component/Service/Service'

const Home = () => {
  return (
    <div className=' bg-[#28292A] '>
      <Hero />
      <Partner />
      <HomeAbout />
      <Service />
      <HomePackage />
      <HomePortfolio />
    </div>
  )
}

export default Home