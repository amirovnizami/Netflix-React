import { useEffect, useState, useContext } from "react";
import FormItem from '../common/FormItem';

const Form = ({ setFormData, formInputs, formButtons, text, formStyle, containerStyle = '', onSubmit }) => {

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className={`${containerStyle} `}>
            <h1 className="font-bold font-white font-roboto text-white text-3xl mb-[10px]">{text}</h1>
            <form className={formStyle} onSubmit={onSubmit}>
                {formInputs.map((item, index) => (
                    <FormItem
                        formStyle = {formStyle}
                        key={index}
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        handleInputChange={handleInputChange}
                        placeholder={item.placeholder}
                        inputStyle={item.inputStyle}
                    />
                ))}

                {formButtons.map((button, index) => (
                    <button
                        key={index}
                        className={button.style}
                        type="submit" 
                        onClick={button.action} 
                    >
                        {button.title}
                    </button>
                ))}
                
            </form>
        </div>
    );
}

export default Form;
