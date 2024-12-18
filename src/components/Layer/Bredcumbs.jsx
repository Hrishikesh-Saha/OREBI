import React from 'react'
import TitleHeader from './TitleHeader'
import { FaAngleRight } from "react-icons/fa";

const Bredcumbs = ({extra}) => {

    if (extra == undefined){
      extra = ""
    }else{
      extra = window.location.pathname.split('/')[2]
    }

  return (
    <div>

      <TitleHeader HeadingText={`${window.location.pathname.split('/')[1]} ${extra}`} className={'capitalize'}/>

      <p className='flex capitalize items-center gap-2 text-[#767676] text-[12px] mt-3 font-sans'>Home <FaAngleRight />{window.location.pathname.split("/")[1]} {extra}</p>

    </div>
  )
}

export default Bredcumbs
