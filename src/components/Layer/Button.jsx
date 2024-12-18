import React from 'react'

const Button = ({btnText, className, onClick}) => {
  return (

    <button onClick={onClick} className={`${className} bg-black transition-all duration-300 text-white py-4 w-[200px] font-sans text-[14px] font-bold hover:text-[16px]`}>
        {btnText}
    </button>

  )
}

export default Button
