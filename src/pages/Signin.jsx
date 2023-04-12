import React from 'react'
import {BiUserCircle} from "react-icons/bi"
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'
import {RiAccountPinCircleFill} from "react-icons/ri"

const Signin = () => {

     
    const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.replace("/docall");
    }

  return (
    <section>
    <div className="login">
      <div className="md:min-h-screen md:py-8 py-16 m-3 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col border border-white bg-colone shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div className="font-medium self-center text-xl sm:text-2xl underline uppercase text-white">SIGN IN</div>
    <button className="relative mt-6 border rounded-md py-2 text-sm text-white  hover:bg-colone bg-opacity-80">
    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FcGoogle  className='text-2xl'/></span>
    <span>Sign In With Google</span>
    </button>
    <div className="relative mt-10 ">
    <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span className=" px-4 text-xs text-white uppercase">Sign in with Email</span>
    </div>
    </div>
    <div className="mt-10">
    <form action="#" onSubmit={handleSubmit}>

        <div className="flex flex-col mb-6">
        <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Email</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            </div>

            <input required id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-white bg-colone" placeholder="Email Address" />
        </div>
        </div>
        <div className="flex flex-col mb-6">
        <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Password</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </span>
            </div>

            <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-white bg-colone" placeholder="Your Password" />
        </div>
        </div>


        <div className="flex w-full">
        <button type="submit" className="flex items-center justify-center focus:outline-none text-colone text-sm sm:text-base bg-white  hover:bg-opacity-80 duration-100 rounded py-2 w-full transition ease-in">
            <span className="mr-2 uppercase">SIGN IN</span>
            <span>
            <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>
        </button>
        </div>
    </form>
    </div>
    <div className="flex justify-center items-center mt-6">
    <a href="#" target="_blank" className="inline-flex items-center font-bold text-white hover:text-slate-400 duration-100 text-xs text-center">
        <span>
        <RiAccountPinCircleFill className='text-2xl'/>
        </span>
        <Link to="/seller" className="ml-2 hover:underline">Need an account ?</Link>
    </a>
    </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default Signin