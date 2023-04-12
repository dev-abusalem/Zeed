import React from 'react'
import Wrapper from '../layouts/Wrapper'
import { Link } from 'react-router-dom'

const BecomeASeller = () => {
  return (
<section className='md:my-16 py-8 relative' >
    <Wrapper>
    <div className='w-[300px] h-[300px] absolute z-1 top-[0%] -md:left-[10%] left-0 md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[120px]  opacity-70'></div>

        <div className=' bg-black md:flex z-10  gap-8 justify-between text-white shadow-md border-2 border-coltwo rounded-3xl md:p-16 p-8  align-middle'>
            <div className='md:p-4 pb-6 md:pb-0 text-left md:w-4/6'>
                <h2 className='text-4xl font-bold '>Become a Seller</h2>
                <h2 className='text-2xl font-bold mt-2'>Start selling on Zeed with a few simple steps!</h2>

                <div className='my-4'>
                <p>1. Sign up, or sign in if you already have an account with Zeed.</p>
                <p>2. Choose the type of business.</p>
                <p>3. Fill in the registration form.</p>

                </div>
                <p className='text-lg'>That’s it! You could be approved and start selling within hours!</p>
            </div>

            <div className='text-center flex justify-center items-center md:w-4/2' >
            <div>
            <Link className='pt-4 pb-5 text-xl text-colone font-semibold block rounded-2xl hover:bg-opacity-80 duration-100 w-full bg-coltwo' to="/signup">Sign Up</Link>
            <Link className='my-3 block hover:underline' to="/signin" >Already a member? Sign in here</Link>
            </div>
            </div>
        </div>
        <div className='w-[300px] h-[300px] absolute z-1 top-[90%] md:top-[80%] md:left-[80%] left-[80] md:mx-0 inset-0 bg-gradient-to-b from-coltwo to-transparent rounded-full shadow-lg filter blur-[120px]  opacity-70'></div>
    </Wrapper>
    </section>
  )
}

export default BecomeASeller