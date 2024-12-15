import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <>
      <div className="container-fluid p-5 fontstyle" style={{ backgroundColor: "#f4f8fc" }}>
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-5">
            <div
              className="card p-4 shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "2px solid #3498db"
              }}
            >
              <h2
                className="card-title text-center mb-3"
                style={{
                  fontWeight: "bold",
                  color: "#2c3e50",
                  fontSize: "1.8rem",
                }}
              >
                Welcome to TradeBazaar!
              </h2>
              <p
                className="card-text text-center"
                style={{
                  color: "#34495e",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                Trade smarter, invest confidently. At TradeBazaar, discover tools and insights to simplify trading, manage risks, and grow your portfolio seamlessly. Start your journey toward financial success with the support you can trust!
              </p>
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#3498db",
                    borderColor: "#2980b9",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="/images/trader-future-banner.webp"
              alt="Hero Section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
