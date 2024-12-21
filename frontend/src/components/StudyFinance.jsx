import React from "react";
import {Link} from 'react-router-dom'
import Webinar from "./Webinar";
import FAQ from "./FAQ";

const StudyFinance = () => {
  return (
    <>
      <div
        className="container-fluid fontstyle d-flex border justify-content-center align-items-center vh-100"
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="row w-100"
          style={{
            maxWidth: "900px",
          }}
        >
          <div className="col-md-12 text-center mb-4">
            <h2 className="fs-2 fw-semibold">
              Learn all about the Stock Market
            </h2>
            <p className="fs-5">
              With our jargon-free and expert-led Courses, Webinars, Events and
              self-help videos.
            </p>
          </div>
          <div className="col-md-12 d-flex flex-column">
            <Webinar />
            <div className="d-flex justify-content-center align-items-center p-4">
              <Link to={"/explore"} className="btn btn-primary fs-5 inline">
                Explore Videos <i className="fa-solid fa-circle-play"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
};

export default StudyFinance;
