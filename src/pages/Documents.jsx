import React from 'react'
import Wrapper from '../layouts/Wrapper'
import {Link} from 'react-router-dom'
const Documents = () => {
  return (
    <section className='md:my-16 py-8' >
    <Wrapper>
    <div className='w-full relative  '>
      <div className='w-[200px] h-[200px] inset-0 bg-gradient-to-b from-coltwo z-0 to-transparent rounded-full shadow-lg filter blur-[80px]  opacity-75'></div>
        <div className=' md:absolute md:top-[50%] w-full m-1 md:left-[50%] md:transform md:-translate-x-[50%] z-10 md:translate-y-[-50%] bg-black text-white shadow-md border-2 border-coltwo rounded-3xl md:p-16 p-8  align-middle'>
            <div className='md:p-4 pb-6 md:pb-0 text-center'>
                <h2 className='text-4xl font-bold '>Become A Seller With Zeed</h2>
                <h2 className='text-2xl font-bold mt-2'>Select Supplier type</h2>
            </div>

            <div className='mt-10 text-center gap-10 md:flex justify-center items-center' >
                <div className='md:w-1/3'>
                <Link className='pt-4 pb-5 block text-xl text-colone font-semibold rounded-2xl hover:bg-opacity-80 duration-100 w-full bg-coltwo' to="/comdoc">Company</Link>
                </div>
                <div className='md:w-1/3 my-4 md:my-0 '>
                <Link className='pt-4 pb-5 block text-xl text-colone font-semibold  rounded-2xl hover:bg-opacity-80 duration-100 w-full bg-coltwo' to="/estabdoc">Establishment</Link>
                </div>
                <div className='md:w-1/3'>
                <Link className='pt-4 pb-5  block text-xl text-colone font-semibold  rounded-2xl hover:bg-opacity-80 duration-100 w-full bg-coltwo' to="/homedoc">Home Business</Link>
                </div>
            </div>
        </div>
        <div className='w-[200px] h-[200px]  md:mx-auto inset-0 bg-gradient-to-b z-0 from-coltwo to-transparent rounded-full shadow-lg filter blur-[80px]  opacity-75'></div>
      </div>
    </Wrapper>
    </section>
  )
}

export default Documents