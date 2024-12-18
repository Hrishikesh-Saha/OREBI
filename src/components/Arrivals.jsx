import React, { useEffect, useState } from 'react'
import Container from './Container'
import TitleHeader from './Layer/TitleHeader'
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Product from './Layer/Product'
import Product1 from '/product1.png'
import Product2 from '/product2.png'
import Product3 from '/product3.png'
import Product4 from '/product4.png'
import axios from 'axios';

function NextArrow(props) {
  const {onClick } = props;
  return (
    <div onClick={onClick} className='absolute md:top-[153px] right-3 md:right-0  cursor-pointer md:w-16 md:h-16 w-10 h-10 bg-black opacity-20 text-white flex justify-center items-center rounded-full md:text-[22px]'>
      <FaLongArrowAltRight/>
    </div>
  );
}

function PrevArrow(props) {
  const {onClick } = props;
  return (
    <div onClick={onClick} className='bg-black opacity-20 text-white md:text-[22px] flex justify-center items-center md:w-16 md:h-16 w-10 h-10 rounded-full absolute left-3 md:left-0 md:top-[153px] top-full z-50 cursor-pointer'>
      <FaLongArrowAltLeft/>
    </div>
  );
}

function Arrivals() {

  let [products, setProducts] = useState([])

  useEffect(() => {

    const getData = async () => {

      let response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    }

    getData();

  },[])


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }

      },
    ]
  };
  return (
    <>

      <Container className={''}>
        <TitleHeader HeadingText={'New Arrivals'}/>
      </Container>

      <Container className={'mt-4 md:mt-12'}>

        <div className="slider-container">

          <Slider {...settings}>


            {
              products.map((item, index) => (

                <Product 

                  key={index} 
                  offer={item.discountPercentage} 
                  productImage={item.thumbnail} 
                  name={item.title} 
                  price={item.price} 
                  brand={item.brand} 
                  className={'md:ml-[30px] ml-[10px]'}

                />

              ))
            }

          </Slider>

        </div>

      </Container>
    </>
  );
}

export default Arrivals;