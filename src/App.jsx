import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Documents from './pages/Documents'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BecomeASeller from './pages/BecomeASeller'
import CompanyDoc from './pages/CompanyDoc'
import EstablishedDoc from './pages/EstablishedDoc'
import HomeDoc from './pages/HomeDoc'
import Thankyou from './pages/Thankyou'

const App = () => {
  return (
    <div className='App text-white'>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/signin'  element={<Signin />} />
        <Route path='/signup'  element={<Signup />} />
        <Route path='/seller'  element={<BecomeASeller />} />
        <Route path='/homedoc'  element={<HomeDoc />} />
        <Route path='/comdoc'  element={<CompanyDoc />} />
        <Route path='/estabdoc'  element={<EstablishedDoc />} />
        <Route path='/docall'  element={<Documents />} />
        <Route path='/thankyou'  element={<Thankyou />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App