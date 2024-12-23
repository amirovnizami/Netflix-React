import React from 'react'
import { useState } from 'react';
function FooterItem({ items }) {

    return (
        <div className='flex gap-3 justify-between flex-row pt-[40px] pb-[40px] text-[#FFFFFFB2] underline '>
            {
                items.map((item) => (
                    <div className='flex flex-col gap-2 font-normal font-roboto text-base '>{item}</div>
                ))
            }
        </div>
    )
}

export default FooterItem