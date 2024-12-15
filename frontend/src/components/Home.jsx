import React from 'react'
import Hero from './Hero'
import FAQ from './FAQ'
import FreeSignup from './FreeSignup'
import Pricing from './Pricing'
import Dynamic from './Dynamic'
import StudyFinance from './StudyFinance'

const Home = () => {
  return (
    <>   
        <Hero />  
        <FreeSignup />
        <Pricing />
        <Dynamic />
        <StudyFinance />    
    </>
  )
}

export default Home