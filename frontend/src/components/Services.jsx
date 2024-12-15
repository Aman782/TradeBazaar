import React from "react";
import StudyFinance from "./StudyFinance";
import FreeSignup from "./FreeSignup";

const Services = () => {
  return (
    <>
      <div className="container-fluid fontstyle p-5 d-flex justify-content-evenly align-items-center border border-1" style={{ backgroundColor: "#f4f8fc" }}>
        <div className="row p-2">
          <div className="col-md-6 m-2 p-3 card">
            <h2 className="m-2 fs-3">Indian markets at your fingertips.</h2>
            <p className="m-2 fs-5">
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>

            <div className="card p-3 m-2 d-flex flex-row btn btn-outline-primary">
              <img
                className="p-1"
                src="/images/stocksHistogram.webp"
                style={{ height: "40px", width: "40px", display: "inline" }}
              ></img>
              <span className="mx-4 fs-5">Stocks & Intraday</span>
            </div>

            <div className="card p-3 m-2 d-flex flex-row btn btn-outline-primary">
              <img
                className="p-1"
                src="/images/mutualFundBlocks.webp"
                style={{ height: "40px", width: "40px", display: "inline" }}
              ></img>
              <span className="mx-4 fs-5">Mutual Funds & SIPs</span>
            </div>

            <div className="card p-3 m-2 d-flex flex-row btn btn-outline-primary">
              <img
                className="p-1"
                src="/images/fnoClock.webp"
                style={{ height: "40px", width: "40px", display: "inline" }}
              ></img>
              <span className="mx-4 fs-5">Futures & Options</span>
            </div>
          </div>

          <div className="col-md-5 m-2">
            <img src="/images/Fingers.avif" style={{height:"100%", width:"100%"}}></img>
          </div>
        </div>
      </div>

      {/* Free Signup */}
      <FreeSignup />

      {/* Study Finance */}

      <StudyFinance />
    </>
  );
};

export default Services;
