import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { LiaConnectdevelop } from "react-icons/lia";

import { Link } from "react-scroll";
export default function Navbar() {

    const [menu, setMenu] = useState(false);
    const navItems = [

        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        }

    ]

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bottom-0  bg-white'>
            <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-2'>
                    <LiaConnectdevelop className='text-green-500 text-5xl' />
                    <h1 className='font-semibold text-xl cursor-pointer'>Shre<span className='text-green-500 text-2xl'>y</span>
                        <p className='text-sm'>Web Developer</p></h1>

                </div>

                {/* Desktop Navbar */}
                <div>
                    <ul className='hidden md:flex gap-8 cursor-pointer '>
                        {
                            navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='md:hidden' onClick={() => setMenu(!menu)}>{menu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}</div>
                </div>
            </div>

            {/* Mobile Navbar */}

            {
                menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}> 
                                    <Link  onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

        </div>
    )
}
