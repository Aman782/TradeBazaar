import React from 'react'

const PeopleCard = ({srcImg, title, content}) => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={`${srcImg}`} style={{height:"80px", width:"80px", borderRadius:"50%"}}></img>
                    <h2>{title}</h2>
                    <p className='fs-5'>{content}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PeopleCard