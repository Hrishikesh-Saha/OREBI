import React, { useState } from 'react'
import Container from '../Container'
import Product1 from '/Image_1.png'
import Product2 from '/Offer4.png'
import Product3 from '/Image_3.png'
import Product4 from '/Image_4.png'
import { FaStar } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import Bredcumbs from '../Layer/Bredcumbs.jsx'
import TitleHeader from '../Layer/TitleHeader.jsx'
import Button from '../Layer/Button.jsx'
import Select from '../Layer/Select.jsx'

const Border = () => {
    return (
        <div className="border w-[780px]"></div> 
    );
}

const ProductDetails = () => {

    let [show, setShow] = useState(false);
    let [accShow, setAccShow] = useState(false)
    let [accShow2, setAccShow2] = useState(false)
    let [value, setValue] = useState("S")
    let [quantity, setQuantity] = useState(1)

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

    <Container className={'mt-[124px] mb-[140px]'}>

        <Bredcumbs extra={true}/>


        <div className='w-full h-[1600px] grid grid-cols-2 grid-rows-2 gap-10 mt-[136px] mb-[49px]'>

            <div className='w-[780px] h-[780px] bg-slate-600'>

                <img src={Product1} alt="missing" className='w-full h-full object-cover' />

            </div>

            <div className='w-[780px] h-[780px] bg-slate-600'>

                <img src={Product2} alt="missing" className='object-cover w-full h-full' />

            </div>

            <div className='w-[780px] h-[780px] bg-slate-600'>

                <img src={Product3} alt="missing" className='object-cover' />

            </div>

            <div className='w-[780px] h-[780px] bg-slate-600'>

                <img src={Product4} alt="missing" className='object-cover' />

            </div>

        </div>

        <div className="text">

            <TitleHeader HeadingText={'Product'}/>

            <div className="reviews mt-[18px] flex items-center gap-x-[25px]">
                <div className="star gap-x-[2px] flex items-center text-[#FFD881] font-[12px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='text-[14px] font-sans text-[#767676]'>1 Review</p>
            </div>

            <div className="price flex items-center gap-x-[22px] mt-5 mb-6">
                <del className='text-[#767676] font-sans'>$88.00</del>
                <span className='text-[20px] font-sans font-bold text-[#262626]'>$44.00</span>
            </div>

            <Border/>


            <div className="color mt-[29px] flex gap-x-[53px]">

                <p className='font-sans leading-[23px] font-bold'>COLOR:</p>

                <div className='flex items-center gap-x-[15px]'>

                    <div className={`bg-[#979797] transition-all w-5 h-5 duration-100 rounded-full cursor-pointer`}></div>

                    <div className={`bg-[#FF8686] transition-all w-5 h-5 duration-100 rounded-full cursor-pointer`}></div>

                    <div className={`bg-[#7ED321] transition-all w-5 h-5 duration-100 rounded-full cursor-pointer`}></div>

                    <div className={`bg-[#B6B6B6] transition-all w-5 h-5 duration-100 rounded-full cursor-pointer`}></div>

                    <div className={`bg-[#15CBA5] transition-all w-5 h-5 duration-100 rounded-full cursor-pointer`}></div>

                </div>
            </div>

            <div className='flex items-center mt-[30px] gap-x-[76px] '>

                <p className='font-sans font-bold leading-[23px]'>SIZE:</p>

                <Select/>
            </div>

            <div className="quantity mt-9 mb-[30px] flex items-center gap-x-[30px]">

                <p className='font-sans font-bold leading-[23px]'>QUANTITY:</p>

                <div className='flex items-center gap-x-2 border border-[#F0F0F0]'>
                    <p onClick={() => setQuantity(quantity < 2 ? quantity = 1 : quantity-=1)} className='text-[#767676] font-sans leading-[30px] py-1 px-[19px] cursor-pointer'>-</p>
                    <p className='text-[#767676] font-sans leading-[30px] py-1 px-4'>{quantity}</p>
                    <p onClick={() => setQuantity(quantity+=1)} className='text-[#767676] font-sans leading-[30px] py-1 px-[19px] cursor-pointer'>+</p>
                </div>

            </div>

            <Border/>

            <div className="Status mt-[21px] flex items-center gap-x-[27px] mb-5">
                <p className='font-sans font-bold leading-[23px]'>STATUS:</p>
                <p className='text-[#767676] font-sans leading-[30px]'>In stock</p>
            </div>

            <Border/>

            <div className="button mt-[29px] mb-[30px]">
                <Button btnText={'Add to Wish List'} className={'mr-5 bg-white border border-black !text-black'}/>
                <Button btnText={'Add to Cart'}/>
            </div>

            <Border/>

            <div className="accordion mt-6">

                <div className="first w-[780px]  pb-6 border-b border-b-[#F0F0F0]">

                    <div className="title flex items-center justify-between w-full">
                        <p className='font-bold text-[#262626] font-sans'>FEATURES  & DETAILS</p>
                        <p onClick={() => setAccShow(!accShow)} className='font-bold font-sans text-2xl cursor-pointer'>+</p>
                    </div>

                    <p className={`${accShow?"text-[16px] mt-3 leading-[30px]":"text-[0px] mt-0 leading-0"}  font-sans  text-[#767676]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

                <div className="second w-[780px] mt-[29px] pb-6 border-b border-b-[#F0F0F0]">

                    <div className="title flex items-center justify-between w-full">
                        <p className='font-bold text-[#262626] font-sans'>SHIPPING & RETURNS</p>
                        <p onClick={() => setAccShow2(!accShow2)} className='font-bold font-sans text-2xl cursor-pointer'>+</p>
                    </div>

                    <p className={`${accShow2?"text-[16px] mt-3 leading-[30px]":"text-[0px] mt-0 leading-0"} font-sans  text-[#767676]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

            </div>

            <p className='text-[#767676] font-sans mt-[14px] leading-[30px] w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>

    </Container>
  )
}

export default ProductDetails
