import React from 'react';

const Learn = ({ imgSrc, title, textContent }) => {
  return (
    <div className="card d-flex flex-row align-items-center" style={{ gap: '10px', height: '150px', backgroundColor:"#f7d8d8" }}>
      <img
        src={imgSrc}
        alt="Learn"
        style={{
          width: '150px',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <div className="card-body p-2">
       <h5 className='fw-semibold'>{title}</h5>
        <p className="card-text m-0">{textContent}</p>
      </div>
    </div>
  );
};

export default Learn;
