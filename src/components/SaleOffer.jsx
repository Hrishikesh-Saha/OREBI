import React from 'react'
import Container from './Container'
import Ad1 from '/Ad_1.png'
import Ad2 from '/Ad_2.png'
import Ad3 from '/Ad_3.png'
import Image from './Layer/Image'

const SaleOffer = () => {
  return (

    <div className='my-10 md:mt-[174px] xl:mb-[128px]'>

      <Container className={'xl:h-[780px] grid grid-cols-2 grid-rows-2 gap-2 md:gap-6 xl:gap-10'}>

        <Image href={'/products'} src={Ad1} className={'row-span-2'}/>
        <Image href={'/products'} src={Ad2}/>
        <Image href={'/products'} src={Ad3}/>

      </Container>

    </div>

  )
}

export default SaleOffer
