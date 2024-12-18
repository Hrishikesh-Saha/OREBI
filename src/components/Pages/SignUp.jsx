import React, { useState } from 'react'
import Container from '../Container'
import Bredcumbs from '../Layer/Bredcumbs'
import TitleHeader from '../Layer/TitleHeader'
import Input from '../Layer/Input'
import Button from '../Layer/Button';

const SignUp = () => {

    let division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"]

    let districts = [
        "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria",
        "Chandpur", "Chattogram", "Chuadanga", "Cox's Bazar", "Cumilla", "Dhaka",
        "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj",
        "Jamalpur", "Jashore", "Jhalokathi", "Jhenaidah", "Joypurhat", "Khagrachari",
        "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat",
        "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj",
        "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
        "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali",
        "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira",
        "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail",
        "Thakurgaon"
    ];
    

    let [firstName, setFirstName] = useState("")
    let [firstNameErr, setFirstNameErr] = useState("")

    let [lastName, setLastName] = useState("")
    let [lastNameErr, setLastNameErr] = useState("")

    let [adress, setAdress] = useState("")
    let [adressErr, setAdressErr] = useState("")

    let [password, setPassword] = useState("")
    let [passwordErr, setPasswordErr] = useState("")

    let [email, setEmail] = useState("")
    let [emailErr, setEmailErr] = useState("")

    let [repeatPassword, setRepeatPassword] = useState("")
    let [repeatPasswordErr, setRepeatPasswordErr] = useState("")
    
    let [phoneNumber, setPhoneNumber] = useState("")
    let [phoneNumberErr, setPhoneNumberErr] = useState("")

    let [city, setCity] = useState("")
    let [cityErr, setCityErr] = useState("")

    let [postCode, setPostCode] = useState("")
    let [postCodeErr, setPostCodeErr] = useState("")

    let manageFirstName = (element) => {

        setFirstName(element.target.value)
        setFirstNameErr("")

    }

    let manageLastName = (element) => {

        setLastName(element.target.value)
        setLastNameErr("")

    }

    let manageAdress = (element) => {

        setAdress(element.target.value)
        setAdressErr("")

    }

    let managePassword = (element) => {

        setPassword(element.target.value)
        setPasswordErr("")

    }

    let manageEmail = (element) => {

        setEmail(element.target.value)
        setEmailErr("")

    }

    let manageRepeatPassword = (element) => {

        setRepeatPassword(element.target.value)
        setRepeatPasswordErr("")

    }

    let manageCity = (element) => {

        setCity(element.target.value)
        setCityErr("")

    }

    let managePhoneNumber = (element) => {

        setPhoneNumber(element.target.value)
        setPhoneNumberErr("")

    }

    let managePostCode = (element) => {

        setPostCode(element.target.value)
        setPostCodeErr("")

    }

    let manageSubmit = () => {

        if (!firstName){
            setFirstNameErr("First name is required")
        }

        if (!lastName){
            setLastNameErr("Last name is required")
        }

        if (!adress){
            setAdressErr("Adress 1 is required")
        }

        if (!password){
            setPasswordErr("Password is required")
        }else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)){
            setPasswordErr("Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.")
        }

        if (!email){
            setEmailErr("Email is required")
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailErr("Enter a valid email.")
        }

        if (!repeatPassword){
            setRepeatPasswordErr("You must fill it")
        }else if (password != repeatPassword){
            setRepeatPasswordErr("Passwords does not match.")
        }

        
        if (!city){
            setCityErr("City is required.")
        }
        
        if (!phoneNumber){
            setPhoneNumberErr("Phone number is required.")
        }

        if (!postCode){
            setPostCodeErr("Post code is required.")
        }


    }

  return (
    <>
        <Container className={'mt-[124px] mb-[140px]'}>
            <Bredcumbs extra={true}/>

            <p className='font-sans leading-[30px] mt-[127px] max-w-[644px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

            <div className="w-full border-b-2 border-[#F0F0F0] pb-[62px]"></div>

            <div className="mt-[57px] border-b-2 w-full pb-[69px]">

                <TitleHeader HeadingText={'Your Personal Details'}/>

                <div className='flex mt-[42px] flex-wrap gap-x-10 gap-y-6'>

                    <Input labelText={'First Name'} inputValue={firstName} id={'firstName'} placeholder={'First Name'} type={'text'} className={'w-[508px] relative'} onChange={manageFirstName}>

                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{firstNameErr}</p>

                    </Input>

                    <Input labelText={'Last Name'} onChange={manageLastName} inputValue={lastName} id={'lastName'} placeholder={'Last Name'} type={'text'} className={'w-[508px] relative'}>

                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{lastNameErr}</p>    

                    </Input>


                    <Input labelText={'Email address'} id={'email'} onChange={manageEmail} inputValue={email} placeholder={'company@domain.com'} type={'email'} className={'w-[508px] relative'}>
 
                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{emailErr}</p>

                    </Input>

                    <Input labelText={'Telephone'} id={'telephone'} placeholder={'Your phone number'} onChange={managePhoneNumber} inputValue={phoneNumber} type={'number'} className={'w-[508px] relative'}>
                    
                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{phoneNumberErr}</p>
                    
                    </Input>


                </div>

            </div>

            <div className="mt-[57px] border-b-2 w-full pb-[69px]">
                <TitleHeader HeadingText={'New Customer'}/>

                <div className='flex mt-[42px] flex-wrap gap-x-10 gap-y-6'>

                    <Input labelText={'Address 1'} onChange={manageAdress} inputValue={adress} id={'adress1'} placeholder={'4279 Zboncak Port Suite 6212'} type={'text'} className={'w-[508px] relative'}>

                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{adressErr}</p>

                    </Input>


                    <Input labelText={'Address 2'} id={'adress2'} placeholder={'—'} type={'text'} className={'w-[508px]'}/>

                    <Input labelText={'City'} id={'city'} placeholder={'Your city'} inputValue={city} onChange={manageCity} type={'text'} className={'w-[508px] relative'}>
                    
                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{cityErr}</p>

                    </Input>

                    <Input labelText={'Post Code'} onChange={managePostCode} inputValue={postCode} id={'postcode'} placeholder={'05228'} type={'text'} className={'w-[508px] relative'}>
                    
                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{postCodeErr}</p>
                    
                    </Input>

                    <div className={`border-b-2 w-[508px]`}>
                        <label className='font-sans font-bold leading-[23px] text-[#262626]' htmlFor='division'>Division</label>
                        <select name="" id="division" className='block text-[#767676] font-sans text-[14px] w-full pt-2.5 pb-4 outline-none'>
                            <option value="pleaseSelect">Please select</option>
                            {
                                division.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    
                    </div>

                    <div className={`border-b-2 w-[508px]`}>
                        <label className='font-sans font-bold leading-[23px] text-[#262626]' htmlFor='districts'>Districts</label>
                        <select name="" id="districts" className='block text-[#767676] font-sans text-[14px] w-full pt-2.5 pb-4 outline-none'>
                            <option value="pleaseSelect">Please select</option>
                            {
                                districts.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>

                </div>

            </div>

            <div className="mt-[57px] border-b-2 w-full pb-[69px]">
                <TitleHeader HeadingText={'Your Password'}/>

                <div className='flex mt-[42px] flex-wrap gap-x-10 gap-y-6'>

                    <Input labelText={'Password'} onChange={managePassword} inputValue={password} id={'password'} placeholder={'Password'} type={'text'} className={'w-[508px] relative'}>

                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{passwordErr}</p>

                    </Input>

                    <Input labelText={'Repeat password'} id={'repeatpassword'} onChange={manageRepeatPassword} inputValue={repeatPassword} placeholder={'Repeat password'} type={'text'} className={'w-[508px] relative'}>

                        <p className='absolute top-full bottom-full text-red-600 font-sans text-sm'>{repeatPasswordErr}</p>

                    </Input>

                </div>

            </div>


                
            <p className='text-[#767676]  flex mt-[65px] gap-x-4 items-center text-[14px] font-sans'>

            <input type="checkbox" className='relative appearance-none after:w-[9px] after:h-[9px] after:bg-[#767676] after:absolute after:left-1/2 after:top-1/2 w-[11px] h-[11px] after:border after:border-white after:-translate-x-1/2 after:-translate-y-1/2 after:content-[" "] border checked:bg-[#767676] checked:after:opacity-100 after:opacity-0 border-[#767676]' /> 

            I have read and agree to the Privacy Policy

            </p>

            <p className='text-[#767676] flex mt-[23px] gap-x-[33px] items-center text-[14px] font-sans'>Subscribe
             Newsletter <span className='flex gap-x-4 items-center'><input type="radio" name='name' className='relative appearance-none after:w-[9px] after:h-[9px] after:bg-[#767676] after:absolute after:left-1/2 after:top-1/2 w-[11px] h-[11px] after:border after:border-white after:-translate-x-1/2 after:-translate-y-1/2 after:content-[" "] border checked:bg-[#767676] checked:after:opacity-100 after:opacity-0 border-[#767676]' /> Yes</span> <span className='flex items-center gap-x-4'><input type="radio" name='name' className='relative appearance-none after:w-[9px] after:h-[9px] after:bg-[#767676] after:absolute after:left-1/2 after:top-1/2 w-[11px] h-[11px] after:border after:border-white after:-translate-x-1/2 after:-translate-y-1/2 after:content-[" "] border checked:bg-[#767676] checked:after:opacity-100 after:opacity-0 border-[#767676]'/>No</span></p>

            <Button btnText={'Log in'} onClick={manageSubmit} className={'mt-[27px]'}/>

        </Container>
    </>
  )
}

export default SignUp
