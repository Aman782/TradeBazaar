import React from 'react'

const StepCard = ({index, text}) => {
  return (
    <>
      <div className='container-fluid fontstyle m-2'>
        <div className='row d-flex justify-content-evenly align-items-center'>
          <div className='col-md-2 p-1 card d-flex justify-content-center align-items-center' style={{backgroundColor:"blue"}}>
             <p className='fs-4 fw-semibold text-white'>{`Step ${index}`}</p>
          </div>

          <div className='col-md-10 p-2 d-flex justify-content-center align-items-center' style={{backgroundColor: "#e3f2fd"}}>
             <p className='fs-5'>{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepCard