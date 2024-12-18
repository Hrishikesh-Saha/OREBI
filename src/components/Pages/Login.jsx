import React from 'react'
import Container from '../Container'
import Bredcumbs from '../Layer/Bredcumbs'
import TitleHeader from '../Layer/TitleHeader'
import Input from '../Layer/Input'
import Button from '../Layer/Button'

const Login = () => {
  return (
    <Container className={'mt-[124px] mb-[140px]'}>
        <Bredcumbs/>

        <p className='font-sans leading-[30px] mt-[127px] max-w-[644px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <div className="w-full border-b-2 border-[#F0F0F0] pb-[62px]"></div>

        <div className="mt-[57px] border-b-2 w-full pb-[69px]">

          <TitleHeader HeadingText={'Returning Customer'}/>

            <div className='flex mt-[42px] flex-wrap gap-x-10 gap-y-6'>

              <Input labelText={'Email address'} id={'email'} placeholder={'company@domain.com'} type={'email'} className={'w-[508px]'}/>
              <Input labelText={'Password'} id={'password'} placeholder={'password'} type={'password'} className={'w-[508px]'}/>

            </div>

            <Button btnText={'Log in'} className={'mt-[29px] !text-black bg-white border-2 border-black'}/>

          </div>

        <div className="mt-[57px] w-full">

          <TitleHeader HeadingText={'New Customer'}/>

          <p className='w-[644px] mt-[38px] font-sans text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

          <Button btnText={'Continue'}  className={'mt-[51px]'}/>

        </div>
    </Container>
  )
}

export default Login
