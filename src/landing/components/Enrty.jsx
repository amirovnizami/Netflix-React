import { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import Logo from './logo';
import Arch from './Arch';
import EmailInput from './EmailInput';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
function Enrty() {
    const navigate = useNavigate()
    const languages = [
        { title: "English", value: "en" },
        { title: "Russian", value: "ru" },
    ];
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState("en"); 

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage); 
    }, [selectedLanguage]);

    return (
        <div className="w-full h-screen bg-[url('/images/bg-image.png')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat no-scrollbar">
            <div className="flex flex-row justify-between px-[150px] h-[88px] items-center">
                <div>
                    <img src="/images/Group.png" alt="" onClick={()=>{
                        navigate('/')
                    }}/>
                </div>
                <div className="flex gap-4 h-[32px] relative">
                    <CustomSelect
                        options={languages}
                        selectedOption={selectedLanguage} 
                        setSelectedOption={setSelectedLanguage} 
                        logo={<Logo />}
                    />
                    <svg
                        className="w-3 absolute left-28 top-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#ffffff"
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                        />
                    </svg>
                    <button className="text-white bg-[#E50914] rounded font-semibold px-4 hover:bg-[#B10810] duration-75 ease-out"
                    onClick={()=>{
                        navigate('/login')}}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <div className="w-[590px] mx-auto mt-[100px]">
                <h1 className="text-white font-semibold text-center  text-6xl font-roboto">
                    {t('entryTitle')}
                </h1>
                <p className="font-semibold text-center text-white text-xl">
                    {t('entrySubtitle')}
                </p>
                <p className="text-white text-center mt-6">
                    {t('readyToWatch')}
                </p>
                <EmailInput HasEmailInput = "true"/>
            </div>
        </div>
    );
}

export default Enrty;
