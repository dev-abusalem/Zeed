import React from 'react'
import {BiUserCircle, BiMobileAlt} from "react-icons/bi"
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'
import {RiAccountPinCircleFill} from "react-icons/ri"
import {MdOutlineDriveFileRenameOutline} from "react-icons/md"
import logo from "../assets/images/logo1.png"

const Signup = () => {

 
    const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.replace("/docall");
    }

  return (
    <section>
    <div className="login">
      <div className="singupbg md:min-h-screen md:py-8 py-16 m-3 flex flex-col items-center justify-center text-white">
        <div className="flex border border-white flex-col bg-colone shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">

    <div className="font-medium self-center text-xl sm:text-2xl uppercase underline text-white">SIGN UP
</div>
    {/* <div>
      <img className='md:w-[60px] mx-auto h-auto w-[40px] my-5' src={logo} alt="logo" />
    </div> */}
    <button className="relative mt-6 border rounded-md py-2 text-sm text-white bg-colone">
    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><FcGoogle  className='text-2xl'/></span>
    <span>Sign Up With Google</span>
    </button>
  
    <div className="relative mt-10 ">
    <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span className=" px-4 text-xs text-white uppercase">Sign up with Email</span>
    </div>
    </div>
    <div className="mt-5">
    <form action="#" onSubmit={handleSubmit}>


      <div className="flex flex-col mb-3">
        <label htmlFor="dname" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Display Name</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <MdOutlineDriveFileRenameOutline className='text-2xl' />
            </div>

            <input required id="dname" type="text" name="dname" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="Display Name" />
        </div>
        </div>

        <div className="flex flex-col mb-3">
        <label htmlFor="username" className="mb-1 text-xs sm:text-sm tracking-wide text-white">User Name</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <BiUserCircle className='text-2xl' />
            </div>

            <input required id="username" type="text" name="username" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="User Name" />
        </div>
        </div>



        <div className="flex flex-col mb-3">
        <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Email</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            </div>

            <input required id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="Email Address" />
        </div>
        </div>




        <div className="flex flex-col mb-3">
        <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Password</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </span>
            </div>

            <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="Your Password" />
        </div>
        </div>


        <div className="flex flex-col mb-3">
        <label htmlFor="cpassword" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Confirm Password</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </span>
            </div>

            <input id="cpassword" type="password" name="cpassword" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 bg-colone focus:outline-none focus:border-white" placeholder="Confirm Password" />
        </div>
        </div>

        <div className="flex flex-col mb-6">
        <label htmlFor="mobile" className="mb-1 text-xs sm:text-sm tracking-wide text-white">Mobile Number</label>
        <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
            <span>
                <BiMobileAlt className="text-2xl" />
            </span>
            </div>

            <input id="mobile" type="tel" name="mobile" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none bg-colone focus:border-white" placeholder="Mobile Number" />
        </div>
        </div>

        <div className="flex w-full">
        <button type="submit" className="flex items-center justify-center focus:outline-none text-colone  text-sm sm:text-base bg-white hover:bg-opacity-80 duration-100 rounded py-2 w-full transition ease-in">
            <span className="mr-2 uppercase">SIGN UP</span>
            <span>
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>
        </button>
        </div>
    </form>
    </div>
    <div className="flex justify-center items-center mt-6">
    <div className="inline-flex items-center font-bold text-white hover:text-slate-600 text-xs text-center">
        <span>
        <RiAccountPinCircleFill className='text-2xl'/>
        </span>
        <Link to="/seller" className="ml-2 hover:underline">Already a member? Sign in here</Link>
    </div>
    </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default Signup