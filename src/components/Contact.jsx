import React from 'react'

export default function Contact() {
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form action="https://getform.io/f/raeqgmva" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold my-2'>Send Your Message</h1>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Full Name</label>
                            <input className='shadow rounded-lg appearance-none border focus:outline-none focus:shadow-outline  py-2 px-3 text-gray-700 leading-tight' id='name' placeholder='Enter your full name' type="text" name="name" required />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>E-mail Address</label>
                            <input className='shadow rounded-lg appearance-none border focus:outline-none focus:shadow-outline  py-2 px-3 text-gray-700 leading-tight' id='name' placeholder='Enter your email address' type="text" name="email" required />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Message</label>
                            <textarea className='shadow rounded-lg appearance-none border focus:outline-none focus:shadow-outline  py-2 px-3 text-gray-700 leading-tight' id='name' placeholder='Type your message here...' type="text" name="message" required />
                        </div>
                        <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
