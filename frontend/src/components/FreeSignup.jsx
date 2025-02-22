import React from 'react'
import {Link} from 'react-router-dom';
const FreeSignup = ({isLoggedIn}) => {
  return (
    <>
        <div className='container-fluid fontstyle p-5 border border-1'>
            <div className='row'>
                <div className='col-md-12 d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='fs-2 fw-semibold'>Open a TradeBazaar Account</h2>
                    <p className='fs-5'>We provide modern facilties, &#8377;0 Investment, and flat &#8377;20 Intraday and F&O trades.</p>
                     
                     {!isLoggedIn? <Link to={'/signup'}>
                        <button className='btn btn-primary fs-5'>Signup Now</button>
                    </Link>:""}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FreeSignup