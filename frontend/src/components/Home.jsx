import React from 'react'
import { useState } from 'react'
import Hero from './Hero'
import FAQ from './FAQ'
import FreeSignup from './FreeSignup'
import Pricing from './Pricing'
import Dynamic from './Dynamic'
import StudyFinance from './StudyFinance'

const Home = ({isLoggedIn}) => {
  return (
    <>   
        <Hero isLoggedIn={isLoggedIn} />  
        <FreeSignup isLoggedIn={isLoggedIn} />
        <Pricing />
        <Dynamic isLoggedIn={isLoggedIn} />
        <StudyFinance />    
    </>
  )
}

export default Home