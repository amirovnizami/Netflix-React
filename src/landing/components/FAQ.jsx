import React from 'react'
import FAQItem from './FAQItem'
import { useTranslation } from 'react-i18next'
function FAQ() {
    const {t,i18n} = useTranslation()
    const items = [
        {
            title: t("faq.questions.0.title"),
            description : t("faq.questions.0.description"),
            id : 1
        },
        {
            title: t("faq.questions.1.title"),
            description : t("faq.questions.1.description"),
            id:2
        },
        {
            title: t("faq.questions.2.title"),
            description : t("faq.questions.2.description"),
            id:3
        },
        {
            title: t("faq.questions.3.title"),
            description : t("faq.questions.3.description"),
            id:4
        },
        {
            title: t("faq.questions.4.title"),
            description : t("faq.questions.4.description"),
            id:5
        },
        {
            title: t("faq.questions.5.title"),
            description : t("faq.questions.5.description"),
            id:6
        },
        {
            title: t("faq.questions.6.title"),
            description : t("faq.questions.6.description"),
            id:7
        },
    ]
  return (
    <div className='bg-[#000000] text-white px-[150px] pt-[64px] flex flex-col gap-2 '>
        <h1 className='font-roboto font-medium text-2xl mb-4'>{t('faq.title')}</h1>
        <FAQItem items = {items}/>
    </div>
  )
}

export default FAQ