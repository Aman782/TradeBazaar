import React from 'react'
import FreeSignup from './FreeSignup';

const About = () => {
  return (
    <>
      <div className='container-fluid fontstyle'>
        <div className='row d-flex justify-content-evenly align-items-center'>
           <div className='col-md-6 p-5'>
             <h2 className='fw-semibold'>TradeBazaar</h2>
             <p className='fs-5'>Partner with leading wealth-tech platform of India</p>
             <span className='fs-5'>Earn over ₹ 1 lakh/month</span>
             <p className='fs-6'>Register as an Authorised Person (AP) and earn incentives for referring customers</p>
           </div>

           <div className='col-md-5 p-5'>
            <img src='/images/Image-Container.webp' style={{height:"350px", width:"250px"}}></img>
           </div>
        </div>
      </div>

      <FreeSignup />
    </>
  )
}

export default About