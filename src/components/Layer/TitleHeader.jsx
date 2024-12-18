import React from 'react'

const TitleHeader = ({HeadingText, className}) => {
  return (

    <h1 className={`font-sans text-[20px] text-center md:text-left md:text-[39px] font-bold text-[#262626] ${className}`}>{HeadingText}</h1>

  )
}

export default TitleHeader
