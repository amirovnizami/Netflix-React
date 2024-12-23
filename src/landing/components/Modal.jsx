import React from 'react'
import { useState } from 'react';
function Modal() {

    return (
        modalOpen && (
            <motion.div
                onClick={() => setModalOpen(false)}
                className="w-full h-screen absolute top-0 left-0 bg-black/60 flex justify-center items-center rounded-lg "
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
            >

                <motion.div
                    className="relative w-[550px] h-[550px] rounded-lg bg-zinc-900 overflow-y-scroll"
                    onClick={(e) => e.stopPropagation()}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <img className='' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
                    <div className='px-6 relative'>

                        <h1 className='text-white text-2xl font-bold my-4'>{data.title}</h1>
                        <div>
                            <GenreItems genres={data.genres} />
                        </div>
                        <p className='text-white my-4 '>{item.overview}</p>
                        <button className='relative pr-[40px] text-white font-roboto text-xl bg-[#E50914] rounded hover:bg-[#B10810] duration-75 ease-out h-[50px] w-[150px]'>
                            Get Started
                            <img className='absolute top-3 right-4' src="/images/Img.png" alt="" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )
    )

}

export default Modal