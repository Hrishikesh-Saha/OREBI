import React, { useState } from 'react'
import Bredcumbs from './Layer/Bredcumbs'
import Container from './Container'
import { Image } from 'antd'
import { IoClose } from 'react-icons/io5'
import { MdArrowDropDown } from 'react-icons/md'
import Select from './Layer/Select'
import Button from './Layer/Button'

const Cart = () => {

  let [count, setCount] = useState(1);
  return (
    <>
    <Container className={'mt-[124px]'}>
      <Bredcumbs/>
    </Container>

    <Container className={'mt-[136px] mb-[54px] w-full'}>

      <div className="top flex justify-between w-full py-8 pl-5 bg-[#F5F5F3] pr-[146px]">
        <div><h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Product</h6></div>
        <div><h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Price</h6></div>
        <div><h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Quantity</h6></div>
        <div><h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Size</h6></div>
        <div><h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Total</h6></div>
      </div>

      <div className="bottom flex items-center w-full py-[30px] pl-5 border">

        <div className='flex items-center gap-10'>

          <p className='cursor-pointer'><IoClose /></p>

          <Image src='/cart01.png' width={100} height={100} className='object-cover'/>

          <h6 className='text-[#262626] font-sans leading-[23px] font-bold'>Product name</h6>
        </div>

        <div className='ml-[55px]'>
          <h5 className='text-[#262626] font-sans text-[20px] font-bold'>$44.00</h5>
        </div>

        <div className='ml-[265px] flex px-5 items-center border gap-x-[38px] py-1 text-[#767676] font-sans leading-[30px]'>

          <p className='cursor-pointer' onClick={() => setCount(count > 1? count-=1 : count)}>-</p>
          <p>{count}</p>
          <p className='cursor-pointer' onClick={() => setCount(count+=1)}>+</p>

        </div>

        <Select className={'ml-[225px]'}/>

        <div className='ml-[190px]'>
          <h5 className='text-[#262626] font-sans text-[20px] font-bold'>$44.00</h5>
        </div>

      </div>
      <div className="coupon border w-full py-9 px-5 flex justify-between">
        <p className='font-sans font-bold text-[14px] cursor-pointer'>Apply coupon</p>
        <p className='font-sans font-bold text-[14px] cursor-pointer'>Update cart</p>
      </div>

      
      <div className="cart-details mt-[54px] flex flex-col items-end">
        <h5 className='text-[20px] font-sans font-bold'>Cart totals</h5>
        <div className="grid grid-cols-2 grid-rows-2 w-[648px] mt-8 flex-wrap">
          <div className="box border pl-5 py-4"><h6 className='font-bold font-sans'>Subtotal</h6></div>
          <div className="box border py-4 pl-5"><p className='text-[#767676] font-sans'>389.99 $</p></div>
          <div className="box border py-4 pl-5"><h6 className='font-bold font-sans'>Total</h6></div>
          <div className="box border py-4 pl-5"><p className='font-sans'>389.99 $</p></div>
        </div>
        <Button className={'mt-[30px]'} btnText={'Proceed to Checkout'}/>
      </div>
    </Container>
    </>
  )
}

export default Cart
