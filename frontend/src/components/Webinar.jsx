import React from 'react';
import Learn from './Learn';

const Webinar = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Left 50% - Webinar Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card" style={{ maxWidth: '90%' , backgroundColor:"#f7d8d8"}}>
            <img
              src="/images/webinarImg.svg"
              className="card-img-top"
              alt="Webinar"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div className="card-body">
              <h5 className='fw-semibold'>Webinars</h5>
              <p className="card-text">
                Online sessions on Risk Management, Options Trading, Technical Analysis and more
              </p>
            </div>
          </div>
        </div>

        {/* Right 50% - Learn Components */}
        <div className="col-md-6 d-flex flex-column gap-3">
          <Learn
            imgSrc="/images/courses.png"
            title={"Courses"}
            textContent="Self-Help courses on Options Trading with Quizzes!"
          />
          <Learn
            imgSrc="/images/quick_videos.png"
            title={"Quick Videos"}
            textContent="Learn about Stocks, Mutual Funds, IPO's, Gold and more"
          />
        </div>
      </div>
    </div>
  );
};

export default Webinar;
