import React from 'react'
import Wrapper from '../layouts/Wrapper'

const Thankyou = () => {
  return (
    <section className='py-16'>
        <Wrapper>
            <div className=''>
                <h1 className='text-4xl text-center font-bold mb-3'>Thank You!</h1>
                <p  className='text-xl font-semibold'>Dear Vendor,</p>
                <p className='text-lg  py-3'>Thank you for choosing Zeed as your success partner. We appreciate your interest in joining our platform. Our team will promptly review your application and get back to you as soon as possible. We are committed to providing a seamless onboarding experience for our vendors, and we look forward to working with you.</p>
                <p className='text-lg  '>Thank you,</p>
                <p className='text-lg font-semibold '>The Zeed Team</p>
            </div>
        </Wrapper>
    </section>
  )
}

export default Thankyou