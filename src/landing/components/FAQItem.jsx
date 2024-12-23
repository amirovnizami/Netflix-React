import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

export default function FAQItem({ items }) {
    const [activeItemId, setActiveItemId] = useState(null);
    return (
        items.map((item) => (
            <div className=' bg-[#2D2D2D] ' onClick={() => {
                setActiveItemId(activeItemId === item.id ? null : item.id)

            }}>
                <h1 className=' flex hover:bg-zinc-700 justify-between py-[29px] w-full font-normal font-roboto text-2xl px-6 border-b border-b-black'>{item.title}
                    <svg className={`${activeItemId === item.id ? 'rotate-45' : 'rotate-0'} size-[30px]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                </h1>

                <AnimatePresence initial={false}>
                    {activeItemId === item.id && (
                        <motion.section
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { height: 0 }
                            }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                           <p className={`${activeItemId === item.id ? "block" : 'hidden'} font-normal text-2xl/8 font-roboto px-6 py-8 `}>{item.description}</p>
                        </motion.section>
                    )}
                </AnimatePresence>
                
            </div>
        ))
    )
}
