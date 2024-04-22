import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PackageCard = ({ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, btn, price, pckgTitle, priceColor, priceDirection}) => {

  console.log(ft10);

  return (
    <div className='border relative border-[#727272] rounded-xl px-[2rem] md:px-[2.8rem] py-4 hover:border-[#92E59B] hover:shadow-lg shadow-black '>

      <div className=''>

        <div className=' gap-6 border-b pb-[3rem] flex items-center justify-center flex-col'>
          <h4 className='text-base '>{pckgTitle}</h4>
          <Fade direction={priceDirection}>
          <h2 className={`text-[25px] font-Poppins font-bold md:text-[30px] text-[#8CB0F5] ${priceColor} `}>BDT {price}/ month</h2>
          </Fade>
          <Link to={"/contact"} className='w-[12rem] h-[2.5rem] flex items-center justify-center rounded-md text-sm mt-2 font-semibold bg-[#34363A] '>
            <button>Get Plan</button>
          </Link>
        </div>

        <div className=' mb-[7rem] mt-7 flex flex-col gap-3 '>

          <div className={`flex items-center gap-2 ${ft1=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft1}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft2=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft2}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft3=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft3}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft4=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft4}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft5=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft5}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft6=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft6}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft7=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft7}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft8=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft8}</h3>
          </div>
          <div className={`flex items-center gap-2 ${ft9=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft9}</h3>
          </div>
          <div className={`flex gap-2 ${ft10=== undefined ? "hidden": "block"  } `}>
            <FaCheck  className='text-[#B2B6FF] '/>
            <h3>{ft10}</h3>
          </div>

        </div>

        <div className={`absolute   flex items-center bottom-7 right-7 justify-end ${btn===true? "block" : "hidden"}  `}>
          <button className='bg-[#E6F4EA] w-32 font-semibold h-8 text-[#000] text-xs  rounded-full '>Recommended</button>
        </div>

      </div>

    </div>
  )
}

export default PackageCard