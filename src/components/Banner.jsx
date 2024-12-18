import React, { useState } from "react";
import Slider from "react-slick";
import Image from "./Layer/Image";
import SlideImage1 from '/Group1.png'

export default function Banner() {

  let [active, SetActive] = useState(0)

  
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (

      <div
        style={{
          position: "absolute",
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',

        }}
        
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    customPaging: i => (

      <div className={`border-r-2 flex items-center text-[10px] font-sans cursor-pointer ${active == i?"text-black border-r-black":"text-transparent border-r-white"}`}
        style={{
          width: "22px",
          height: "30px",
        }}
      >

        0{i + 1}

      </div>
    ),

    beforeChange: (a,b) => {
      SetActive(b)
    },


    responsive: [
      {
        breakpoint: 680,
        settings: {
          appendDots: dots => (

            <div
              style={{
                position: "absolute",
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '20px',
              }}
              
            >
              <ul className="flex" style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
      
          customPaging: i => (
      
            <div className={`border-b-2 flex justify-center text-[10px] font-sans cursor-pointer ${active == i?"text-black border-b-black":"text-transparent border-b-white"}`}
              style={{
                width: "18px",
                height: "20px",
              }}
            >
      
              0{i + 1}
      
            </div>
          ),
        }

      }
    ],

  };

  return (
    <Slider {...settings}>

      <Image href={'/products'} imageClass={'w-full'} src={SlideImage1}/>
      <Image href={'/products'} imageClass={'w-full'} src={SlideImage1}/>
      <Image href={'/products'} imageClass={'w-full'} src={SlideImage1}/>
      <Image href={'/products'} imageClass={'w-full'} src={SlideImage1}/>

    </Slider>

    
  );

  
}