import React, { Children } from 'react'

const Input = ({labelText, id, onChange, placeholder, type, inputValue, children, className}) => {
  return (
    <div className={`border-b-2 ${className}`}>

        <label className='font-sans font-bold leading-[23px] text-[#262626]' htmlFor={id}>{labelText}</label>

        <input 

          onChange={onChange}
          id={id} 
          className='block w-full pt-2.5 pb-4 outline-none' 
          type={type} 
          placeholder={placeholder}
          value={inputValue}

        />

        {children}

    </div>
  )
}

export default Input