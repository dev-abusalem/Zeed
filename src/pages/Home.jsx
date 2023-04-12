import React from 'react'
import Hero from '../components/Hero'
import Counter from '../components/Counter'
import Features from '../components/Features'
import FeatureTwo from '../components/FeatureTwo'
import OurVision from '../components/OurVision'
import CallToAction from '../components/CallToAction'
import SpacialFeatures from '../components/SpacialFeatures'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <SpacialFeatures />
      <FeatureTwo />
      <Features />
      
    </>
  )
}

export default Home