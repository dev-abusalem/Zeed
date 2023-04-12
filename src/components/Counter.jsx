import React from 'react'
import Wrapper from '../layouts/Wrapper'
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className='md:pb-2'>
        <Wrapper>
            <div className='border border-colthree text-center text-colthree md:flex justify-between align-middle md:mb-16 rounded-3xl md:p-16 '>
                <div className='md:w-1/3 p-4'>
                    <CountUp className='text-3xl md:text-6xl font-semibold ' end={2000} start={0} duration={3}   suffix="+"/>
                    <h2 className='md:mt-3 text-white text-xl font-semibold '>Users Active</h2>
                </div>
                <div className=' md:w-1/3  p-4 md:border-x-2 border-colthree '>
                    <CountUp className='text-3xl md:text-6xl font-semibold ' end={150} start={0} duration={3}   suffix="M"/>
                    <h2 className='md:mt-3 text-white text-xl font-semibold '>Downloads</h2>
                </div>
                <div className='md:w-1/3  p-4 '>
                    <CountUp className='text-3xl md:text-6xl font-semibold ' end={170} start={0} duration={3}   suffix="$"/>
                    <h2 className='md:mt-3 text-white text-xl font-semibold '>Total Transactions</h2>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Counter