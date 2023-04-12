import React from 'react'
import Wrapper from '../layouts/Wrapper'
import {BsInfoCircleFill} from "react-icons/bs"
import Button from '../layouts/Button'
import heroImg1 from "../assets/images/sf/sf (8).png"
import google from "../assets/images/Payment-Gateway-Invoicing-Google.webp"
import apple from "../assets/images/Payment-Gateway-Invoicing-Apple.webp"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className='my-12'>
        <Wrapper>
            <div className='md:flex justify-between align-middle'>
                <div className="hero_left md:w-1/2">
                    <div className=' inline-block' >
                    
                    </div>
                    <div className='my-8'>
                        <h1 className='text-4xl	font-semibold md:text-7xl md:leading-[90px]'>
                        Jump Start Your<br></br>
                        <span className='text-colthree font-bold'>New Shopping</span><br></br>
                        Experience
                        </h1>

                        <div className='mt-8'>
                            <p className='md:text-xl font-semibold'>The Future of Seller-Buyer Transactions</p>
                        </div>
                        <div className='mt-10 flex justify-start gap-10 align-middle'>
                            <Link to="/">
                                <img className='md:w-[200px] md:h-[60px]' src={google} alt="google" />
                            </Link>
                            
                            <Link to="/">
                                <img className='md:w-[200px] md:h-[60px]'  src={apple} alt="apple" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero_right md:w-1/2 relative">
                    <img src={heroImg1} alt="heroImg1 " className='md:pt-8'/>
                <div className='w-[300px] h-[300px] absolute top-1/3 md:left-1/2 left-0 md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[80px]  opacity-75'></div>
                   
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero