import React from 'react'
import Container from './Container'
import Image from './Layer/Image'
import Ad from '/Ads_2.png'

const Ad2 = () => {
  return (
    <Container>
        <Image src={Ad} href={'/products'}/>
    </Container>
  )
}

export default Ad2
