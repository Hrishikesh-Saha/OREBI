import React, { useEffect, useState } from 'react'
import TitleHeader from './Layer/TitleHeader'
import Container from './Container'
import Product from './Layer/Product'
import Offer1 from '/Offer1.png'
import Offer2 from '/Offer2.png'
import Offer3 from '/Offer3.png'
import Offer4 from '/Offer4.png'
import axios from 'axios'

const SpecialOffer = () => {

  let [products, setProducts] = useState([])

  useEffect(() => {

    const getData = async () => {

      let response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products)

    }

    getData()
  },[])
  return (
    <>
        <Container className={'mt-12 md:mt-32'}>
            <TitleHeader HeadingText={'Special Offers'}/>
        </Container>

        <Container className={'flex flex-wrap mt-4 md:mt-12 justify-around md:gap-x-10 mb-12 md:mb-[106px]'}>

          {
            products.filter((_ , index) => index >= 4 && index < 8 ).map((item, index) => (

              <Product 

                key={index}
                productImage={item.thumbnail}
                name={item.title} 
                price={item.price} 
                offer={item.discountPercentage} 
                brand={item.brand}

              />

            ))
          }

        </Container>
    </>
  )
}

export default SpecialOffer
