import React, {useState} from 'react'
// import ContactBg from "../assets/contactbg.jpg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import MessageIcon from "../../assets/MessageIcon.png"
// import "./PageStyle.css"
import { Fade } from "react-awesome-reveal";


const Contact = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    // setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setOpenModal(true);

    emailjs
      .sendForm('service_yj9rk9k', 'template_2nciw3f', form.current, {
        publicKey: 'cDMJgvGmv3znADFeL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  return (
    <div className='w-full h-[100vh] bg-[#1E1E1E] relative z-0  '>
      {/* <img src={ContactBg} alt="" className='w-full h-full object-cover' /> */}

      <div className='absolute top-0 w-full h-full flex-col lg:flex-row z-10 flex items-center justify-center gap-[5rem] lg:gap-[10rem] px-[5%] lg:px-[10%]'>
        <div>
          <Fade direction='left'>
          <h3 className='text-whit font-BankGothic text-2xl lg:text-4xl text-white '>Brandio ABM</h3>
          </Fade>
        </div>



        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full lg:w-[30rem] text-black bg-white rounded-md p-[3rem]'>
          <h3 className='text-center text-3xl font-semibold mb-10'>Get in Touch</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Name</label>
              <input required type="text" name="from_name" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Email</label>
              <input required type="email" name="user_email" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Phone Number</label>
              <input required type="text" name="user_mobile" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Address</label>
              <input type="text" name="user_address" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Message</label>
              <textarea required name="message" className='outline-none border-none pb-10' />
            </div>
          </div>
          <input onClick={handleClick} type="submit" value="Send" className='cursor-pointer focus:ring-1 focus:outline-none focus:border-transparent focus:ring-black mt-8 px-3 py-2 border text-base text-mono bg-black
           text-white rounded-md font-semibold'></input>
        </form>


       {
        isVisible ?  
        <div className="w-72 absolute mx-auto ab flex items-center z-50 justify-center">
            <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                    <div className='w-[3rem] mb-3 flex items-center justify-center mx-auto  '>
                      <img src={MessageIcon} alt="" className='w-full h-full object-cover' />
                    </div>
                    <h1 className="p-2 text-xl text-green-500 font-semibold">Sent Message Successfully</h1>
                    
                </div>
            </div>
        </div>
        : null
       }



      </div>
      <div className='absolute blurBg '></div>

    </div>
  )
}

export default Contact
