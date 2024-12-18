import React, { useState } from 'react'
import Container from '../Container'
import Bredcumbs from '../Layer/Bredcumbs'
import { RiLayoutGridFill } from 'react-icons/ri'
import { FaList } from 'react-icons/fa'
import Paginate from '../Layer/Paginate'
import { MdArrowDropUp } from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'

const Cat = ({className, num, plus}) => {

  let [show, setShow] = useState(false)

  return(

    <div className='pb-5 border-b border-b-[#F0F0F0]'>

      <div className={`${className}  text-[#767676] font-sans leading-[30px] w-full flex justify-between `}>

        <p>Category {num}</p>
        <p onClick={() => setShow(!show)} className='font-bold text-[20px] cursor-pointer'>{plus?show?"-":"+":""}</p>

       </div>

      <div className={`mt-3 ml-3 text-[#767676] ${show?"visible static":"invisible absolute"}`}>
        <p className='cursor-pointer'>Sub Catagory 1</p>
        <p className='cursor-pointer mt-3'>Sub Catagory 2</p>
        <p className='cursor-pointer mt-3'>Sub Catagory 3</p>
        <p className='cursor-pointer mt-3'>Sub Catagory 4</p>
        <p className='cursor-pointer mt-3'>Sub Catagory 5</p>
      </div>

    </div>

  );

}

const Color =  ({num, className, bgColor}) => {
  return (

    <div className={`flex items-center gap-x-[10px] pb-5 border-b border-b-[#F0F0F0] cursor-pointer ${className}`}>

      <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
      <p className='font-sans leading-[30px] text-[#767676]'>Color {num}</p>
      
    </div>
  
  );
}

const Brand =  ({num, className}) => {
  return (

    <div className={` pb-5 border-b border-b-[#F0F0F0] cursor-pointer ${className}`}>

      <p className='font-sans leading-[30px] text-[#767676]'>Brand {num}</p>
      
    </div>
  
  );
}

const Price =  ({priceRange, className}) => {
  return (

    <div className={` pb-5 border-b border-b-[#F0F0F0] cursor-pointer ${className}`}>

      <p className='font-sans leading-[30px] text-[#767676]'>{priceRange}</p>
      
    </div>
  
  );
}


const Shop = () => {

  let [showNumber, setShowNumber] = useState(12)

  let numberChange = (element) => {
    let changeNumber = Number(element.target.value)    
    setShowNumber(changeNumber)
  }

  let [show, setShow] = useState(false);
  let [show2, setShow2] = useState(false);


  return (

    <div className='mt-[124px]'>

      <Container>

        <Bredcumbs/>

        <div className="main flex justify-between mt-[130px]">
          
          <div className='left w-[370px]'>

            <h1 className='text-[20px] font-sans font-bold'>Shop by Category</h1>

            <Cat className={'mt-[35px]'} num={'1'} plus={true}/>
            <Cat className={'mt-5'} num={'2'}/>
            <Cat className={'mt-5'} num={'3'} plus={true}/>
            <Cat className={'mt-5'} num={'4'}/>
            <Cat className={'mt-5'} num={'5'}/>

            <div className='mt-[53px] w-full flex justify-between items-center'>

              <p className='text-[20px] font-sans font-bold '>Shop by Color</p>
              <p onClick={() => setShow(!show)} className='text-2xl cursor-pointer'>{show?<MdArrowDropUp />:<IoMdArrowDropdown />}</p>

            </div>

            <div className={`color ${show?"visible static":"absolute invisible"}`}>

              <Color num={'1'} bgColor={'bg-black'} className={'mt-[35px]'}/>
              <Color num={'2'} bgColor={'bg-[#FF8686]'} className={'mt-5'}/>
              <Color num={'3'} bgColor={'bg-[#7ED321]'} className={'mt-5'}/>
              <Color num={'4'} bgColor={'bg-[#B6B6B6]'} className={'mt-5'}/>
              <Color num={'5'} bgColor={'bg-[#15CBA5]'} className={'mt-5'}/>

            </div>

            <div className='mt-[53px] w-full flex justify-between items-center'>

              <p className='text-[20px] font-sans font-bold '>Shop by Brand</p>
              <p onClick={() => setShow2(!show2)} className='text-2xl cursor-pointer'>{show2?<MdArrowDropUp />:<IoMdArrowDropdown />}</p>

            </div>

            <div className={`color ${show2?"visible static":"absolute invisible"}`}>

              <Brand num={'1'} className={'mt-[35px]'}/>
              <Brand num={'2'} className={'mt-5'}/>
              <Brand num={'3'} className={'mt-5'}/>
              <Brand num={'4'} className={'mt-5'}/>
              <Brand num={'5'} className={'mt-5'}/>

            </div>

            <div className='mt-[53px] w-full flex justify-between items-center'>

              <p className='text-[20px] font-sans font-bold '>Shop by Price</p>

            </div>

            <div className={`color`}>

              <Price priceRange={'$0.00 - $9.99'} className={'mt-[35px]'}/>
              <Price priceRange={'$10.00 - $19.99'} className={'mt-5'}/>
              <Price priceRange={'$20.00 - $29.99'} className={'mt-5'}/>
              <Price priceRange={'$30.00 - $39.99'} className={'mt-5'}/>
              <Price priceRange={'$40.00 - $69.99'} className={'mt-5'}/>

            </div>

          </div>

          <div className="right w-[1190px] pb-[140px]">

            <div className='w-full h-9 mt-1.5 flex justify-between'>

              <div className="category flex gap-x-5">

                <div className='h-full flex justify-center items-center bg-black text-white w-9 cursor-pointer'>
                  <RiLayoutGridFill />
                </div>

                <div className='text-[#737373] cursor-pointer border-2 border-[#F0F0F0] h-full w-9 flex justify-center items-center'>
                  <FaList />
                </div>

              </div>

              <div className="options flex gap-x-10">

                <div className="sort flex items-center gap-x-[14px]">

                  <p className='text-[#767676] leading-[30px] font-sans'>Sort by: </p>

                  <select name="" id="" className='border-[#F0F0F0] font-sans outline-none border-2 leading-[30px] pl-5 text-[#767676] h-full w-[240px]'>
                    <option value="featured">Featured</option>
                    <option value="featured1">Featured 1</option>
                    <option value="featured2">Featured 2</option>
                    <option value="featured3">Featured 3</option>
                  </select>

                </div>

                <div className="show flex items-center gap-x-[14px]">

                  <p className='text-[#767676] leading-[30px] font-sans' >Show:</p>

                  <select onChange={numberChange} name="" id="" className='border-[#F0F0F0] font-sans outline-none border-2 leading-[30px] pl-5 text-[#767676] h-full w-[140px]'>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>

                </div>
                
              </div>

            </div>

            <Paginate itemsPerPage={showNumber}/>
          </div>

        </div>

      </Container>

    </div>
  )
}

export default Shop
