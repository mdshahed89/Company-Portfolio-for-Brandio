import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-[#252525] px-3 py-5 text-[#fff] '>
                <div className='max-w-[1320px] mx-auto'>
                    <div className='flex items-center justify-between border-b pb-2 '>
                        <div className='flex font-semibold text-sm sm:text-base items-center gap-1 sm:gap-3 md:gap-5 '>
                            <Link to={"/about"}><h3>About Us</h3></Link>
                            <p>|</p>
                            <Link to={"/packages"}><h3>Packages</h3></Link>
                            <p>|</p>
                            <Link to={"/portfolio"}><h3>Portfolio</h3></Link>
                            <p>|</p>
                            <Link to={"/contact"}><h3>Contact</h3></Link>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Link
                                target='_blank'
                                to={"https://www.facebook.com/brandioabm"}
                            ><FaFacebookSquare className='cursor-pointer text-base' /></Link>
                            <Link
                                target='_blank'
                                to={"https://www.linkedin.com/company/brandioabm/"}
                            > <TfiLinkedin className='cursor-pointer text-base' /></Link>
                        </div>
                    </div>

                    <div className='flex justify-center items-center font-semibold sm:justify-between pt-2 '>
                    <div className='flex md:text-base text-sm items-center gap-3'>
                        <h3>Copyright 2024 Brandio</h3>
                        <p>|</p>
                        <h3>All Rights Reserved.</h3>
                    </div>
                    <div className='sm:block text-base hidden'>
                        <h3>Bangladesh</h3>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
