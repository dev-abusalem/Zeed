import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, link , className}) => {
  return (
    <>
        <div className='my-3'>
            <Link className={` text-white bg-coltwo text-lg md:py-4 py-2 px-5 md:px-10 md:my-5 my-2 inline-block font-semibold hover:opacity-80 duration-100 rounded-xl ${className}`} to={link}>{title}</Link>
        </div>
    </>
  )
}

export default Button