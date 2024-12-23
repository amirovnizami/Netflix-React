import React from 'react'
import FooterItem from './FooterItem'
import Logo from './logo'
import { useState } from 'react'
import CustomSelect from './CustomSelect'
import EmailInput from './EmailInput'
function Footer() {
    const languages = [{ title: "English", value: "en" }, { title: "Russian", value: "ru" }]
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const items = [
        [
            <a href="">FAQ</a>,
            <a href="">Investor Relations</a>,
            <a href="">Buy Gift Cards</a>,
            <a href="">Cookie Preferences</a>,
            <a href="">Legal Notices</a>
        ],
        [
            <a href="">Help Center</a>,
            <a href="">Jobs</a>,
            <a href="">Ways to Watch</a>,
            <a href="">Corporate Information</a>,
            <a href="">Only on Netflix</a>
        ],
        [
            <a href="">Account</a>,
            <a href="">Netflix Shop</a>,
            <a href="">Terms of Use</a>,
            <a href="">Do Not Sell or Share My Personal </a>,
            <a href="">Information</a>
        ],
        [
            <a href="">Media Center</a>,
            <a href="">Redeem Gift Cards</a>,
            <a href="">Privacy</a>,
            <a href="">Speed Test</a>,
            <a href="">Ad Choices</a>
        ]
    ]
    return (
        <div className='bg-[#000000]  h-[600px] pt-[40px] px-[150px]  pd-8'>
            <p className='text-[#FFFFFFB2] text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='w-[800px] h-[56px] mt-[16px] text-center flex  justify-center items-center relative pl-[120px] mb-12'>
                <div className='w-[700px]  h-[56px] '>
                    <input className='w-full h-full bg-[#161616B2] border border-r-gray-400 rounded' type="text" />
                </div>
                <button className='relative pr-[40px] text-white font-medium font-roboto text-2xl h-full bg-[#E50914] rounded hover:bg-[#B10810] duration-75 ease-out ml-[10px] w-[220px]'>Get Started</button>
                <span className='inline-block absolute right-5 top-4 ml-[20px] px-[5px]'><svg className='w-[14px] ml-[20px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
            </div>
            <a href="" className='text-[#FFFFFFB2] underline'>Questions? Contact us.</a>
            <FooterItem items={items} />

            <div className='h-[30px]'>
                <CustomSelect options={languages} selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} logo={<Logo />} />
            </div>
            <p className='mt-8 text-[#FFFFFFB2]'>Netlix Azerbaijan</p>

        </div>
    )
}

export default Footer