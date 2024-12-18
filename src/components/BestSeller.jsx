import React, { useEffect, useState } from 'react'
import Container from './Container'
import Product from './Layer/Product'
import B1 from '/B1.png'
import B2 from '/B2.png'
import B3 from '/B3.png'
import B4 from '/B4.png'
import axios from 'axios'

const BestSeller = () => {

  let [products, setProducts] = useState([]);

  useEffect(()=>{

    const getData = async () => {

      let response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products)

    }

    getData()

  },[])
  return (
    <>
        <Container className={'flex flex-wrap gap-y-3 justify-around md:gap-x-10 mt-20 md:mt-[217px] mb-8 md:mb-[130px]'}>

          {
            products.filter((_, index) => index < 4).map((item, index) => (

              <Product

                key={index}
                productImage={item.thumbnail} 
                name={item.title} 
                brand={item.brand} 
                price={item.price} 
                offer={item.discountPercentage}

              />

            ))
          }
        
        </Container>
    </>
  )
}

export default BestSeller
