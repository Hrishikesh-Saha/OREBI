import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';

const Select = ({className}) => {
    
    let [show, setShow] = useState(false);
    let [value, setValue] = useState("S");

     let manageSelect1 = () => {
        setValue("S")
        setShow(false)
    }

     let manageSelect2 = () => {
        setValue("M")
        setShow(false)
    }

     let manageSelect3 = () => {
        setValue("L")
        setShow(false)
    }

     let manageSelect4 = () => {
        setValue("XL")
        setShow(false)
    }

     let manageSelect5 = () => {
        setValue("2XL")
        setShow(false)
    }

  return (

    <>
    <div className={`select border relative py-1 border-[#F0F0F0] items-center pl-5 pr-4 flex gap-x-[76px] ${className}`}>

        <p className='text-[#767676] font-sans leading-[30px]'>{value}</p>

        <span onClick={() => setShow(!show)} className='text-[26px] text-[#767676] cursor-pointer'><MdArrowDropDown /></span>

        <div className={`absolute transition-all duration-150 top-full left-0 w-full ${show?"opacity-100 visible":"opacity-0 invisible"}`}>

            <ul>

                <li onClick={manageSelect1} value="S" className='pl-5 py-1 border bg-white border-[#F0F0F0] hover:bg-slate-200 transition-all duration-100 cursor-pointer'>S</li>
                <li onClick={manageSelect2} className='pl-5 py-1 border bg-white border-[#F0F0F0] hover:bg-slate-200 transition-all duration-100 cursor-pointer'>M</li>
                <li onClick={manageSelect3} className='pl-5 py-1 border bg-white border-[#F0F0F0] hover:bg-slate-200 transition-all duration-100 cursor-pointer'>L</li>
                <li onClick={manageSelect4} className='pl-5 py-1 border bg-white border-[#F0F0F0] hover:bg-slate-200 transition-all duration-100 cursor-pointer'>XL</li>
                <li onClick={manageSelect5} className='pl-5 py-1 border bg-white border-[#F0F0F0] hover:bg-slate-200 transition-all duration-100 cursor-pointer'>2XL</li>

            </ul>

        </div>

    </div>
    </>
  )
}

export default Select
