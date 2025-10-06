import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchPage = () => {
    const languageChosen = useSelector((store) =>  store.languageReducer?.currentLanguage);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input 
            type='text'
            className='bg-white p-4 m-4  col-span-9'
            placeholder={lang[languageChosen]?.gptSearchPlaceHolder}
            />
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
               {lang[languageChosen]?.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchPage