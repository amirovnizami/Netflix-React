import React from 'react'

function Reasons() {

  const reasonsBox = [
    {
        title : "Enjoy on your TV",
        description : "Watch on Smart TVs, Playstation,Xbox, Chromecast, Apple TV, Blu-ray players, and more",
        src : "/images/televison.png" 
    },
    {
        title : "Download your shows to watch offline",
        description : "Save your favorites easily and always have something to watch.",
        src :  "/images/download.png" 
    },
    {
        title : "Watch everywhere",
        description : "Stream unlimited movies and TVshows on your phone, tablet,laptop, and TV.",
        src : "/images/scope.png" 
    },
    {
        title : "Create profiles for kids",
        description : "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
        src : "/images/profile.png"
    }
]
  return (
    <div className=' flex w-[970px] bg-black  mx-auto gap-4  '>
        {reasonsBox.map((item,index)=>(
          <div
          key={index}
          className=' bg-[#192247] w-[270px] rounded-2xl px-4 py-6 h-[330px] relative shadow-lg bg-gradient-to-b from-[#1f1f47] to-[#320f28]'
          >
            <h1 className='text-white font-medium font-roboto text-2xl'>{item.title}</h1>
            <p className='mt-4 text-white/60 font-normal font-roboto text-base '>{item.description}</p>
            <img className='absolute bottom-0 right-0 w-18 pb-3 pr-4' src={item.src} alt="" />
          </div>

        ))}
    </div>
  )
}

export default Reasons