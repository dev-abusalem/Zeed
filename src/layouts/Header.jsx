import React, { useEffect, useState } from 'react'
import Wrapper from "./Wrapper"
import {MdClose} from "react-icons/md"
import {BiUserCircle} from "react-icons/bi"
import {GiHamburgerMenu, GiShoppingBag} from "react-icons/gi"
import {GoThreeBars} from "react-icons/go"
import { Link } from 'react-router-dom'
import {BsSun, BsMoonFill} from "react-icons/bs"
import logo from "../assets/images/newlogo.png"
const Header = () => {

  const [showMenu , setShowMenu] = useState(false);

  function handleShowMenu(){
    setShowMenu(!showMenu);
  }

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY > 200) {
  //      setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className='w-full md:pt-0 z-20 bg-colone duration-200 bg-opacit1-70  md:sticky md:top-0 md:h-[90px] pb-5 md:pb-0'>
        <Wrapper className="md:leading-[90px] leading-[60px]">

            <div className="menus md:flex justify-between">
                <div className="brand text-center mt-2 md:mt-0 flex justify-start item">
                    <a href="/ " className='flex justify-start items-center'>
                      <img src={logo} alt="logo" className='w-[170px]  h-auto mx-auto md:mx-0' />
                    </a>
                </div>
                <div className='md:hidden flex justify-end'>
                    {
                        showMenu ? <MdClose className='text-xl' onClick={handleShowMenu} /> :<GoThreeBars  className='text-xl' onClick={handleShowMenu} /> 
                    }
                    
                </div>
                <nav className={showMenu ? "block" : "hidden md:block"} >
                        <ul className='md:flex justify-center align-middle gap-5'>
                            <li><Link className='hover:text-gray-200 duration-100' to="/">Home</Link></li>
                            <li><Link className='hover:text-gray-200 duration-100' to="/seller">Sign Up</Link></li>
                            <li><Link className='hover:text-gray-200 duration-100' to="/seller">Document Upload</Link></li>
                        </ul>
                </nav>
               
                <div className='md:flex block justify-right gap-3 align-middle'>
                    <div className='block'>
                        <Link className='bg-coltwo py-2 md:mt-0 mt-5 px-6 rounded-lg pb-3 text-colone font-semibold hover:opacity-80 duration-150' to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
           
        </Wrapper>
        
    </header>
  )
}

export default Header