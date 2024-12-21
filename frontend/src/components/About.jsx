import React from "react";
import FreeSignup from "./FreeSignup";
import WrapPeopleCards from "./WrapPeopleCards";
import Profile from "./Profile";
import FAQ from "./FAQ";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid fontstyle d-flex justify-content-evenly align-items-center py-5"
        style={{
          background: "linear-gradient(to right, #f4f8fc, #eaf3ff)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="row d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="col-md-6 px-4">
            <h2 className="fw-bold fs-1 text-primary mb-3">TradeBazaar</h2>
            <p className="fs-5 text-dark">
              Partner with India's leading wealth-tech platform.
            </p>
            <span className="fs-4 text-success fw-bold d-block mb-2">
              Earn over ₹ 1 lakh/month
            </span>
            <p className="fs-6 text-secondary">
              Register as an Authorised Person (AP) and earn incentives for
              referring customers.
            </p>
            <button
              className="btn btn-primary mt-3 px-4 py-2"
              style={{
                borderRadius: "30px",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="col-md-4 p-5 text-center">
            <img
              src="/images/Image-Container.webp"
              alt="TradeBazaar"
              style={{
                height: "350px",
                width: "250px",
                borderRadius: "15px",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <FreeSignup />
      <Profile />
      <WrapPeopleCards />
      <FAQ />
    </>
  );
};

export default About;
