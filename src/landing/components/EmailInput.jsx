import React from 'react'

function EmailInput() {
    return (
        <div className='w-full h-[56px] mt-[16px] text-center flex items-center relative'>
            <input className='w-[350px] h-full bg-[#161616B2] border border-r-gray-400 rounded' type="text" />
            <button className='relative pr-[40px] text-white font-medium font-roboto text-2xl h-full bg-[#E50914] rounded hover:bg-[#B10810] duration-75 ease-out ml-[10px] w-[220px]'>Get Started</button>
            <span className='inline-block absolute right-10 top-4 ml-[20px] px-[5px]'><svg className='w-[14px] ml-[20px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
        </div>
    )
}

export default EmailInput