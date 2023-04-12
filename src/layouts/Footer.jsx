import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <footer className='md:py-16 py-8  border-t shadow-inner shadow-white  border-white mt-10'>
        <Wrapper>
            <div className='md:flex text-white justify-between align-top gap-10'>
                <div className='md:w-1/4 mb-6 md:mb-1'>
                    <h2>About us</h2>
                    <h1>LOGO</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, optio.</p>
                </div>
                <div className='md:w-1/4 mb-6 md:mb-1'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
                <div className='md:w-1/4 mb-6 md:mb-1'>
                    <h2>Download Apps</h2>
                    <p>Google Play Store</p>
                    <p>Apple Store</p>
                </div>

                <div className='md:w-1/ md:mb-1'>
                    <h2>Subscribe</h2>
                    <p>Subscribe our newsletter</p>
                    <p>newsletter</p>
                </div>
            </div>
        </Wrapper>
    </footer>
  )
}

export default Footer