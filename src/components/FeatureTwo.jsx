import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import Button from '../layouts/Button'
import Wrapper from '../layouts/Wrapper'


import image1 from "../assets/images/pimg (1).jpg"
import image2 from "../assets/images/pimg (2).jpg"
import google from "../assets/images/Payment-Gateway-Invoicing-Google.webp"
import apple from "../assets/images/Payment-Gateway-Invoicing-Apple.webp"
import { Link } from 'react-router-dom'
const FeatureTwo = () => {
  return (
    <section className='pt-16'>
    <Wrapper>
           
        <div className='md:flex justify-between gap-16 align-middle'>
           
            
            <div className="hero_left   md:w-1/2">

            <div className=' inline-block' >
                <div className='py-3 px-5 rounded-lg shadow bg-white text-colone font-semibold flex justify-start align-middle gap-3'>
                    <BsFillCheckCircleFill className='mt-1' />
                    <p>Online Shopping Redefined</p>
                </div>
                </div>


                <div className='my-10'>
                    <h1 className='text-3xl md:leading-[3.5rem] font-semibold md:text-5xl '>
                    Get Zeed App and<br></br>
                    <span className='text-colthree font-bold'>Start Shopping Today</span>
                    </h1>

                    <div className='mt-8'>
                        <p className='md:text-lg'>
                            Download the Zeed App to your device and start shopping with ease. Find products from stores you know and trust, place bids on products in a secure manner and get a notification when the price is right. It's like having a personal shopper in your pocket! Start shopping and bidding today with Zeed.
                        </p>
                        
                        <div className='mt-6 flex justify-start gap-10 align-middle'>
                            <Link to="/">
                                <img className='md:w-[200px] md:h-[60px]' src={google} alt="google" />
                            </Link>
                            
                            <Link to="/">
                                <img className='md:w-[200px] md:h-[60px]'  src={apple} alt="apple" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hero_right relative md:w-1/2 my-16">


                <img className='md:w-[30%] md:h-[95%] w-[42%] h-full absolute top-[0%] md:right-2 right-16 transform rounded-xl' src={image1} alt="heroImg1" />


                <img className='md:w-[30%] md:h-[95%] w-[42%] h-full  absolute md:top-[10%] md:left-[50%] top-[10%] left-[20%] transform rounded-xl' src={image2} alt="image2" />



                <div className='w-[300px] h-[300px] md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[80px]  opacity-75'></div>
            </div>


        </div>
    </Wrapper>
    </section>
  )
}

export default FeatureTwo