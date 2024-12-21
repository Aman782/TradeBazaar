import React from "react";
import StudyFinance from "./StudyFinance";
import FreeSignup from "./FreeSignup";
import Pricing from "./Pricing";
import Steps from "./Steps";
import VideoPlayer from "./VideoPlayer";
import FAQ from "./FAQ";

const Services = () => {
  return (
    <>
      <div
        className="container-fluid fontstyle p-5 border border-1"
        style={{
          background: "linear-gradient(135deg, #f4f8fc, #eaf2f8)",
          borderRadius: "10px",
        }}
      >
        <div className="row p-2 d-flex justify-content-between align-items-center">
          {/* Text and Features Section */}
          <div className="col-md-6 m-2 p-3 card shadow-sm border-0">
            <h2 className="m-2 fs-3 text-black">
              Indian Markets at Your Fingertips
            </h2>
            <p className="m-2 fs-5 text-secondary">
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>

            {[
              {
                imgSrc: "fa-chart-bar",
                title: "Stocks & Intraday",
                bgColor: "#e3f2fd",
              },
              {
                imgSrc: "fa-piggy-bank",
                title: "Mutual Funds & SIPs",
                bgColor: "#e8f5e9",
              },
              {
                imgSrc: "fa-clock",
                title: "Futures & Options",
                bgColor: "#fff8e1",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card p-3 m-2 d-flex flex-row align-items-center btn btn-outline-primary"
                style={{
                  backgroundColor: item.bgColor,
                  borderRadius: "10px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 15px rgba(0, 0, 0, 0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)")
                }
              >
                <i
                  className={`fas ${item.imgSrc} fa-2x text-primary p-2`}
                ></i>
                <span className="mx-4 fs-5 text-dark">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="col-md-5 m-2 d-flex justify-content-center align-items-center">
            <img
              src="/images/Fingers.avif"
              alt="Indian markets at your fingertips"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Free Signup */}
      <FreeSignup />
    
      {/* Pricing */}
      <Pricing />

      {/* Steps  */}
      <Steps />
       
       {/* VideoPlayer  */}
      <VideoPlayer videoId="RFP3ooXIiyI"/>

      {/* FAQ */}
      <FAQ />
    </>
  );
};

export default Services;
