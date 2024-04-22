import React from 'react'
import CountUp from 'react-countup';


const Number = ({ scrolltrigger, number, title }) => {
  return (
    <div className='flex justify-center'>
      <div className='   '>
      <div className='flex font-semibold text-3xl text-[#717885] '>
        {
          scrolltrigger ? <CountUp
            start={0}
            end={number}
            duration={3}
            className=''
          /> : 0
        }
        <h3>+</h3>
      </div>
      <div className=' '>
       
        <div className=' '>
          {title}
        </div>
      </div>

    </div>
    </div>
  )
}

export default Number
