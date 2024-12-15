import React from "react";

const Profile = () => {
  return (
    <>
      <div className="container-fluid fontstyle p-5 border">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5">
            <img src="/images/profileImg.jpg" style={{borderRadius:"50%", height:"390px", width:"350px"}}></img>
          </div>

          <div className="col-md-5">
            <h2>Founder of TradeBazaar</h2>
            <p>
               <b>Aman</b> bootstrapped and founded TradeBazaar in 2024 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              TradeBazaar has changed the landscape of the Indian broking industry.
            </p>
            <p className="fw-semibold">He is a BTech Final Year Undergraduate from IMSEC, Ghaziabad</p>
            <span>Building tech products is his passion</span>
            <p className="mt-4 fs-5 fw-bold">Connect On</p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary me-3"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-info me-3"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
