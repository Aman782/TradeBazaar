import React from 'react'

const Pricing = () => {
  return (
    <>
        <div className='container-fluid fontstyle p-5 border'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <h2 className='fs-2 fw-semibold'>Transparent pricing, no hidden charges</h2>
                </div>
            </div>

            <div className='row p-4 d-flex justify-content-evenly'>
                <div className='col-md-2 card d-flex p-2 justify-content-center align-items-center'  style={{backgroundColor:"#fee"}}>
                   <span className='fs-2'>&#8377;0</span>
                   <h5>Account Opening</h5>
                   <p className='text-center btn btn-primary'>Demat + Trading</p>
                </div>

                <div className='col-md-2 card d-flex p-2 justify-content-center align-items-center'  style={{backgroundColor:"#fee"}}>
                   <span className='fs-2'>&#8377;0</span>
                   <h5>Commission</h5>
                   <p className='text-center btn btn-primary'>Mutual Funds and IPOs</p>
                </div>

                <div className='col-md-2 card d-flex p-2 justify-content-center align-items-center'  style={{backgroundColor:"#fee"}}>
                   <span className='fs-2'>&#8377;0</span>
                   <h5>Demat AMC</h5>
                   <p className='text-center btn btn-primary'>Maintenance Charges</p>
                </div>

                <div className='col-md-2 card d-flex p-2 justify-content-center align-items-center'  style={{backgroundColor:"#fee"}}>
                   <span className='fs-2'>&#8377;20</span>
                   <h5>Brokerage</h5>
                   <p className='text-center btn btn-primary'>Equity & F&O</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pricing