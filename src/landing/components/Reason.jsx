import React from 'react'
import { useTranslation } from 'react-i18next'
function Reasons() {
  const {t,i18n} = useTranslation();
  const reasonsBox = [
    {
        title: t("reasonsToJoin.enjoyOnTv.title"), 
        description: t("reasonsToJoin.enjoyOnTv.description"), 
        src: "/images/televison.png"
    },
    {
        title: t("reasonsToJoin.downloadToWatchOffline.title"),
        description: t("reasonsToJoin.downloadToWatchOffline.description"),
        src: "/images/download.png"
    },
    {
        title: t("reasonsToJoin.watchEverywhere.title"),
        description: t("reasonsToJoin.watchEverywhere.description"),
        src: "/images/scope.png"
    },
    {
        title: t("reasonsToJoin.profilesForKids.title"),
        description: t("reasonsToJoin.profilesForKids.description"),
        src: "/images/profile.png"
    }
];

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