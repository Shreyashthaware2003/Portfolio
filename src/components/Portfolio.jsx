import React from 'react';
import java from "../../public/java.png";
import mongo from "../../public/mongo.png";
import express from "../../public/expressjs.png";
import node from "../../public/node.png";
import reactjs from "../../public/reactjs.jpg";

export default function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: mongo,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "ExpressJS"
        },
        {
            id: 3,
            logo: reactjs,
            name: "Reactjs"
        },
        {
            id: 4,
            logo: node,
            name: "NodeJS"
        },
        {
            id: 5,
            logo: java,
            name: "Java"
        },
    ];
    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
            <div >
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 '>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className=' w-4/4 h-[300px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[120px] h-[120px] rounded-full  border-[2px] p-1' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className='justify-around px-6 py-4 space-x-3'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
