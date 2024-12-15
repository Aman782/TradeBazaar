import React from 'react'
import Hero from './Hero'
import FAQ from './FAQ'
import FreeSignup from './FreeSignup'
import Pricing from './Pricing'

const Home = () => {
  return (
    <>   
        <Hero />  
        <FreeSignup />
        <Pricing />
        <FAQ />      
    </>
  )
}

export default Home