import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiOutlineRefresh } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { Navigate } from 'react-router-dom';


const Li = ({name, icon}) => {

  return (
    <li className='flex justify-between w-[120px]  items-center cursor-pointer'>
        <p className='transition-all duration-300 font-sans md:text-base text-[10px] font-bold text-[#767676] hover:text-black'>{name}</p>
        {icon}
    </li>
  );

}


const VerticalProduct = ({name, price, productImage, brand, offer, offerEye,className}) => {

  let [OfferEye, setOfferEye] = useState(offerEye)

  return (

    <div className={`md:w-full w-[147px] relative ${className} flex items-center`}>

        <div className="image h-[207px] cursor-pointer">

            <img className=' h-full object-cover' src={productImage} alt="missing" />

        </div>

        <div className={`offer absolute left-4 top-3 bg-[#262626] py-1 px-3 md:py-2 md:px-8 ${OfferEye?"visible":"invisible"}`}>
          <p className='text-white font-bold text-[12px] md:text-[14px] font-sans'>{offer}</p>
        </div>

        <div className="text w-full px-8">
            
            <div className="top flex justify-between">
                <p className='font-sans md:text-[20px] text-[14px] font-bold'>{name}</p>
                <p className='font-sans md:text-[16px] text-[10px] leading-[30px] text-[#767676]'>{price}</p>
            </div>

            <div className="description mt-6 text-[#767676] font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi ipsam eligendi debitis. Recusandae quae ipsum perferendis ea cupiditate, rem quis officia eaque dolorem doloribus perspiciatis porro velit id at!
            </div>

            <div className="bottom">
                <p className='md:mt-4 mt-1 text-[#767676] text-[10px] md:text-[16px] leading-[30px] font-sans'>{brand}</p>
            </div>

        </div>



        <div className="overlay px-7 py-6 bg-opacity-40">

            <ul className='flex flex-col gap-2 md:gap-5'>

            <Li name={'Wish List'} icon={<FaHeart />}/>
            <Li name={'Compare'} icon={<HiOutlineRefresh />}/>
            <Li name={'Add to Cart'} icon={<FaShoppingCart />}/>

            </ul>

        </div>

    </div>

  )
}

export default VerticalProduct
