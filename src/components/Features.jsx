import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import Button from '../layouts/Button'
import Wrapper from '../layouts/Wrapper'
import google from "../assets/images/Payment-Gateway-Invoicing-Google.webp"
import apple from "../assets/images/Payment-Gateway-Invoicing-Apple.webp"
import { Link } from 'react-router-dom'
import image1 from "../assets/images/getZeed.png"
import image2 from "../assets/images/heroCenter.png"

const Features = () => {
  return (
    <section className='pt-16'>
    <Wrapper>
           
        <div className='md:flex justify-between gap-16 align-middle'>
           
            <div className="hero_left relative  md:w-1/2 my-16">
                <div className='w-[250px] h-[250px] mx-auto md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-3xl opacity-75'></div>
                <img className='md:w-[30%]  w-[40%] h-full  absolute top-[5%]  md:top-[10%] md:left-2 left-[22%] transform rounded-xl' src={image1} alt="heroImg1" />
                <img className='md:w-[30%]  w-[40%] h-full  absolute top-[30%] left-[35%] md:left-[20%] transform rounded-xl' src={image2} alt="heroImg1" />
            </div>


            <div className="hero_right pt-16 md:pt-0  md:w-1/2">

            <div className=' inline-block' >
                <div className='py-3 px-5 rounded-lg shadow bg-white text-colone font-semibold flex justify-start align-middle gap-3'>
                    <BsFillCheckCircleFill className='mt-1' />
                    <p>Top-Notch Features on Zeed</p>
                </div>
                </div>


                <div className='my-10'>
                    <h1 className='text-3xl md:leading-[3.5rem] font-semibold md:text-5xl '>
                    <span className='text-colthree font-bold'>Seamless and Effortless</span><br></br>
                    Bidding for Products
                    </h1>

                    <div className='mt-8'>
                        <p className='md:text-lg'>Zeed offers a modern e-commerce system that allows you to place orders and bid on products from multiple stores. Place your order quickly and easily, or participate and bid in auctions and get notifications when the price is right and complete your purchase effortlessly.</p>
                        
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
        </div>

        <div className=' md:mt-24 my-12 mt-0 w-full mx-auto md:w-[800px]'>
            <div className="inline-block my-3">
                <div className='py-3 px-5 rounded-lg shadow bg-colthree text-colone font-semibold flex justify-start align-middle gap-3'>
                   <BsFillCheckCircleFill className='mt-1 text-4xl md:text-xl' />
                   <p>Connect with recommended stores based on your interests and follow them.</p>
               </div>
            </div>

            <div className="inline-block my-3">
                <div className='py-3 px-5 rounded-lg shadow bg-colthree text-colone font-semibold flex justify-start align-middle gap-3'>
                   <BsFillCheckCircleFill className='mt-1 text-4xl md:text-xl' />
                   <p>Buy from multiple different stores and receive goods in one package within 24 hours.</p>
               </div>
            </div>

            <div className="inline-block my-3">
                <div className='py-3 px-5 rounded-lg shadow bg-colthree text-colone font-semibold flex justify-start align-middle gap-3'>
                   <BsFillCheckCircleFill className='mt-1 text-2xl md:text-xl' />
                   <p>Like and comment on posts from your favorite stores.</p>
               </div>
            </div>

            <div className="inline-block my-3">
                <div className='py-3 px-5 rounded-lg shadow bg-colthree text-colone font-semibold flex justify-start align-middle gap-3'>
                   <BsFillCheckCircleFill className='mt-1 text-6xl md:text-3xl' />
                   <p>Make your purchases through a secure payment gateway, track your packages, and seamlessly contact the stores through Zeed.</p>
               </div>
            </div>
        </div>
        <div className=''>
            
        <p className='text-white text center mt-8'>*A sales commission & a fixed fee will be applied for each sale. There will be no registration or any recurring subscription fees for selling on Zeed for the duration of the agreement.

        </p>
        </div>
    </Wrapper>
    </section>
  )
}

export default Features