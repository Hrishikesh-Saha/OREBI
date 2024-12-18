import React from 'react'
import { FaTruck } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'

const Features = () => {
  return (
    <section className='py-5 flex justify-center border-b-[#F0F0F0] border-b-2 '>

        <div className="flex gap-x-5 2xl:gap-x-[535px] ">

            <div className="flex gap-x-2 items-center">
                <p className='md:text-2xl font-extrabold'>2</p>
                <span className='font-sans text-[10px] 2xl:text-[16px] text-[#6D6D6D]'>Two years warranty</span>
            </div>

            <div className="flex gap-x-2 items-center">
                <p className='md:text-2xl font-extrabold'><FaTruck/></p>
                <span className='font-sans text-[10px] 2xl:text-[16px] text-[#6D6D6D]'>Free shipping</span>
            </div>

            <div className="flex gap-x-2 items-center">
                <p className='md:text-2xl font-extrabold -rotate-90'><TbReload/></p>
                <span className='font-sans text-[10px] 2xl:text-[16px] text-[#6D6D6D]'>Return policy in 30 days</span>
            </div>

        </div>

    </section>
  )
}

export default Features
