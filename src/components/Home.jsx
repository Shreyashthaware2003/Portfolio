import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import Astro from "../../public/Astro.webp";

export default function Home() {
    return (
        <>
            <div name="Home" className='container mx-auto px-4 md:px-20 my-20 '>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            <ReactTyped className='text-green-500 font-bold' strings={["Developer", "Programmer", "Coder"]} typeSpeed={100} backSpeed={100} loop />

                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>A Web Developer/Programmer is a professional responsible for the creation, maintenance, and enhancement of websites and web applications. Their work involves translating design concepts into functional and interactive web experiences, ensuring usability, performance, and responsiveness across various devices and platforms. They play a key role in the digital presence of a company, from coding websites and implementing user interfaces to integrating with backend services and optimizing for performance.</p>
                        <br />
                        {/* Social Media */}
                        <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 '>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Available on</h1>
                                <div className='flex gap-4 text-2xl cursor-pointer mt-1'>

                                    <a href="https://www.facebook.com/"><FaSquareFacebook className='hover:scale-110 duration-200 rounded-full' /></a>
                                    <a href="https://www.linkedin.com/"><FaLinkedin className='hover:scale-110 duration-200 rounded-full' /></a>
                                    <a href="https://github.com/login"><FaGithubSquare className='hover:scale-110 duration-200 rounded-full' /></a>
                                    <a href="https://www.telegram.com/"><FaTelegram className='hover:scale-110 duration-200 rounded-full' /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Currently working on</h1>
                                <div className='flex gap-4 text-2xl mt-1 '>
                                    <DiMongodb className='hover:scale-110 duration-200 rounded-full' />
                                    <FaReact className='hover:scale-110 duration-200 rounded-full' />
                                    <SiExpress className='hover:scale-110 duration-200 rounded-full' />
                                    <FaNodeJs className='hover:scale-110 duration-200 rounded-full' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-1/2 md:ml-48 mt-[16px] order-1 '>
                        <img src={Astro} alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
