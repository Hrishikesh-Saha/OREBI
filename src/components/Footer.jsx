import React from 'react'
import Container from './Container'
import Logo from '/FooterLogo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='py-[53px] bg-[#F5F5F3]'>

            <Container className={'grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-8 gap-2'}>

                <div className='row-span-2'>

                    <h3 className='font-sans text-[12px] md:text-[16px] font-bold text-[#262626] leading-[23px]'>MENU</h3>
                    
                    <ul>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] mt-1 md:mt-4'>Home</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Shop</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>About</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Contact</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Journal</li>
                    </ul>

                </div>


                <div className='row-span-2 pl-1 md:pl-0'>
                    <h3 className='font-sans text-[12px] md:text-[16px] font-bold text-[#262626] leading-[23px]'>SHOP</h3>
                        
                    <ul>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] mt-1 md:mt-4'>Category 1</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Category 2</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Category 3</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Category 4</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Category 5</li>
                    </ul>

                </div>


                <div className='row-span-2 col-span-2 pl-4 md:pl-0'>

                    <h3 className='font-sans text-[12px] md:text-[16px] font-bold text-[#262626] leading-[23px]'>HELP</h3>
                    
                    <ul>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] mt-1 md:mt-4'>Privacy Policy</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Terms & Conditions</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Special E-shop</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Shipping</li>
                        <li className='font-sans text-[#6D6D6D] text-[8px] md:text-[14px] leading-[23px] md:mt-1.5'>Secure Payments</li>
                    </ul>

                </div>

                <div className='Contacts md:pl-20 col-span-2'>

                    <h2 className='text-[#262626] text-[10px] md:text-[16px] font-sans font-bold md:leading-[27px]'>(052) 611-5711 <br/> company@domain.com</h2>

                    <p className='text-[#6D6D6D] mt-1 md:mt-4 text-[10px] md:text-[14px] md:leading-[23px] font-sans'>575 Crescent Ave. Quakertown, PA 18951</p>

                </div>

                <div className='Logo hidden md:block col-span-2'>

                    <img src={Logo} alt="missing" />

                </div>

            </Container>

            <Container className={'flex justify-between items-center mt-8 md:mt-16'}>

                <div className="icons flex gap-x-2 md:gap-x-7">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>

                <p className='text-[9px] md:text-[14px] text-[#6D6D6D] leading-[23px] font-sans'>
                    2020 Orebi Minimal eCommerce Figma Template by Adveits
                </p>

            </Container>
        </div>
    </>
  )
}

export default Footer
