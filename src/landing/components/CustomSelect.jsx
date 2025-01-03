import React, { useState } from 'react';

function CustomSelect({ options, selectedOption, setSelectedOption, logo }) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedTitle = options.find(option => option.value === selectedOption)?.title || selectedOption;

    return (
        <div
            className={`border border-white relative ${
                logo ? 'h-full w-[140px]' : 'h-[30px] w-[130px]'
            } rounded-md px-2 bg-zinc-800 p-[10px] cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            {logo && logo}
            <p
                className={`absolute ${
                    logo ? 'right-10 top-0' : 'right-10 top-0'
                } text-white`}
            >
                {selectedTitle}
            </p>
            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-white rounded-md shadow-md mt-2 z-10">
                    {options.map((item, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setSelectedOption(item.value); 
                                setIsOpen(false);
                            }}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomSelect;
