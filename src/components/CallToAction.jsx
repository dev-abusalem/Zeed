import React from 'react'
import Wrapper from '../layouts/Wrapper'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='md:mt-16 pt-8 relative' >
    <Wrapper className="">
    <div className='w-[300px] h-[300px] absolute z-1 top-[0%] -md:left-[10%] left-0 md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[120px]  opacity-70'></div>

        <div className=' bg-black md:flex z-10 gap-8 justify-between text-white shadow-md border-2 border-coltwo rounded-3xl md:px-16 md:pt-8 md:pb-8 p-8  align-middle'>
            <div className='md:p-4 pb-6 md:pb-0 text-left md:w-4/5'>
                <h2 className='text-3xl md:text-5xl font-bold '>Start selling with <span className='text-coltwo font-bold'>Zeed</span></h2>
                <p className='text-lg py-3'>Become a seller on Zeed with a few simple steps. No subscriptions. No commitment. No monthly fees.*</p>
            </div>

            <div className='text-center flex justify-center items-center md:w-1/5' >
            <Link className='pt-4 pb-5 text-xl text-colone rounded-2xl hover:bg-opacity-80 duration-100 font-semibold w-full bg-coltwo' to="/seller">Become a Seller</Link>
           
            </div>
        </div>

        <div className='w-[300px] h-[300px] absolute z-1 top-[90%] md:left-[75%] left-[80] md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[120px]  opacity-70'></div>
    </Wrapper>
    </section>
  )
}

export default CallToAction