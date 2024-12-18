import React, { useEffect, useState } from 'react'
import Container from './Container'
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosClose, IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from './Layer/Button';
import Image from './Layer/Image';

const SearchBar = () => {

  let [show, setShow] = useState(false)
  let [showAcc, setShowAcc] =  useState(false)
  let [showCart, setShowCart] =  useState(false)

  let [search, setSearch] = useState('')
  let [products, setProducts] = useState([])
  let [filterData, setFilterData] = useState([])

  let mangeSearch = (element) => {
    setSearch(element.target.value)
  }

  useEffect(() =>{

    const getData = async () => {
      try{
        const responses = await fetch('https://dummyjson.com/products');
        const data = await responses.json();
        setProducts(data.products)
      }catch{
        console.error("No products found");
      }
    }

    getData()
  },[])

  useEffect(() => {

    if (search == ''){

      setFilterData('')

    }else{

      let searchData = products.filter((items) => items.title.toLowerCase().includes(search.toLowerCase()))
      setFilterData(searchData)      
    }
  }, [search, products])


  return (

    <div className="searchbar bg-[#F5F5F3] py-[25px]">

        <Container className={'flex justify-between px-3'}>

          <div className="category flex items-center cursor-pointer relative" >

            <div className="btn flex items-center gap-x-2.5" onClick={() => setShow(!show)}>

              <div className="icon text-2xl">
                <BiMenuAltLeft/>
              </div>

              <p className='md:text-[14px] text-[0px] font-sans'>
                Shop by Category
              </p>

            </div>

            <ul className={`absolute z-30 transition-all duration-300 top-full left-0 w-[263px] bg-[#262626] ${show?'opacity-100 visible':'opacity-0 invisible'}`}>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Accesories</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-200 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Furnitures</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-300 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Electronics</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-300 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Clothes</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-300 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Bags</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-300 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>

              <div className="Li group">

                <li className='py-4 pl-5 group-hover:pl-8 transition-all duration-300 group relative after:content-[""] after:w-full after:h-[1px] after:bg-[#2D2D2D] after:absolute after:top-full after:left-0'>

                <Link to={'/'} className='transition-all duration-300 group-hover:font-bold font-sans text-[14px] text-white'>Home appliances</Link>

                </li>

                <div className="opacity-0 invisible flex group-hover:visible group-hover:opacity-100 transition-all duration-300 category absolute left-full gap-x-[50px] top-0 h-full bg-white pt-7 pb-8 pl-10 pr-12">

                  <ul className='w-[60px]'>

                    <h4 className='font-sans font-bold mb-5'>Phones</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Phone 7</Link></li>

                  </ul>

                  <ul className='w-[90px]'>

                    <h4 className='font-sans font-bold mb-5'>Computers</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Computer 7</Link></li>

                  </ul>

                  <ul className='w-[120px]'>

                    <h4 className='font-sans font-bold mb-5'>Smartwatches</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Smartwatches 7</Link></li>

                  </ul>

                  <ul className='w-[70px]'>

                    <h4 className='font-sans font-bold mb-5'>Cameras</h4>

                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 1</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 2</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 3</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 4</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 5</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 6</Link></li>
                    <li className='mb-3'><Link className='text-[14px] font-sans text-[#767676] hover:font-bold hover:text-black transition-all duration-300'>Camera 7</Link></li>

                  </ul>

                </div>

              </div>  

            </ul>

          </div>

          <div className="input relative">

            <input type="text" className='w-[280px] outline-none md:w-[600px] py-2 md:py-4 placeholder:text-[14px] font-sans pl-4' placeholder='Search Products' value={search} onChange={mangeSearch}/>
            
            <div className="icon absolute text-xl top-1/2 -translate-y-1/2 right-4 cursor-pointer">
              <IoMdSearch />
            </div>

            {
              filterData.length > 0 && (

                <ul className='w-[600px] bg-white shadow-2xl border-2 overflow-x-auto h-80 flex flex-col gap-y-3 absolute left-0 top-full translate-y-4 z-50'>

                  {
                    filterData.map((item, index) => (

                      <li key={index} className='grid grid-cols-3 px-4 bg-[#F3F4F6] '>
                        
                        <img className='h-28' src={item.thumbnail} alt={item.thumbnail} />
                      
                        <div className='flex flex-col justify-center gap-2'>
                          <p className="title font-sans font-bold">{item.title}</p>
                          <p className="price text-[#767676] font-sans">${item.price}</p>
                        </div>

                        <div className="button flex flex-col gap-y-4 items-end justify-center">

                          <button className='bg-orange-400 py-1 w-40 text-white font-bold'>Add to cart</button>
                          <button className='bg-orange-400 py-1 w-40 text-white font-bold'>Add to wishlist</button>

                        </div>

                      </li>

                    ))
                  }
                </ul>

              )
            }

          </div>

          <div className="icons hidden md:flex gap-x-10 items-center cursor-pointer relative">

            <div className="user flex items-center" onClick={() => setShowAcc(!showAcc)}>
              <FaUser />
              <MdOutlineArrowDropDown className={`transition-all duration-300 ${showAcc?"rotate-180":""}`}/>

            </div>

            <div className="cart cursor-pointer" onClick={() => setShowCart(!showCart)}>
              <FaShoppingCart />
            </div>

            <div className={`account transition-all z-30 duration-300 absolute top-full right-[58px] ${ showAcc?"opacity-100 visible":"opacity-0 invisible"}`}>
                <Button btnText={'My Account'}></Button>
                <Button btnText={'Log Out'} className={'!bg-white !text-black !font-normal'}></Button>
            </div>

            <div className={`Cart absolute top-full z-30 transition-all duration-300 right-0 ${showCart?"opacity-100 visible":"opacity-0 invisible"}`}>

              <div className="top flex bg-[#F5F5F3] items-center gap-x-5 p-5">

                <div className="image h-20 w-20 bg-[#D8D8D8]">
                  <Image src={'#'} alt={'missing'}/>
                </div>

                <div className="text flex items-center gap-x-20 ">

                  <div className="description">

                    <p className='font-sans text-[14px] font-bold min-w-[135px]'>Black Smart Watch</p>
                    <p className='font-sans text-[14px] font-bold mt-3'>$44.00</p>

                  </div>

                  <div className="cross text-[30px] font-bold">
                    <IoIosClose/>
                  </div>

                </div>

              </div>

              <div className="bottom bg-white p-5">

                <div className="price">

                  <p className='font-sans leading-[23px] text-[#767676]'>Subtotal: <span className='font-bold text-black'>$44.00</span></p>

                </div>

                <div className="button mt-3 flex gap-x-5 w-full">

                  <Button btnText={'View Cart'} className={'!w-[50%] !bg-white !text-black border-[1px] border-black'}/>
                  <Button btnText={'Checkout'} className={'!w-[50%]'}/>

                </div>
              </div>

            </div>

          </div>

        </Container>

        
        


    </div>
  )
}

export default SearchBar
