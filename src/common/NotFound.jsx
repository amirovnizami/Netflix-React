import { nav } from 'framer-motion/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center flex-col'>
        <p className='text-white'>The Page you were looking for is not available</p>
        <button className='bg-[#E50911] py-2 px-3 text-lg font-bold text-white mt-4' onClick={()=>{
            navigate('/')
        }} >Go Back</button>
    </div>
  )
}
