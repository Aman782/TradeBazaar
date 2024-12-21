import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="container-fluid fontstyle py-2"
        style={{ backgroundColor: "#f8e9e9", border:"0.0001 rem solid black" }}
      >
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="mx-3 fs-4  fw-semibold text-decoration-none">
              TradeBazaar <i className="fa-solid fa-arrow-trend-up"></i>
            </p>
          </div>

          <div className="col-md-8 d-flex align-items-center justify-content-center ">
            <ul className="d-flex justify-content-evenly">
              <Link
                to={"/"}
                className="mx-4 fs-5 text-decoration-none text-black"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="mx-4 fs-5 text-decoration-none text-black"
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="mx-4 fs-5 text-decoration-none text-black"
              >
                Contact
              </Link>

              <Link
                to={"/explore"}
                className="mx-4 fs-5 text-decoration-none text-black"
              >
                Explore <i className="fa-solid fa-angles-right"></i>
              </Link>
            </ul>
          </div>

          <div className="col-md-2 d-flex align-items-center justify-content-center fontstyle">
            <ul className="d-flex justify-content-evenly">
              <Link
                to={"/signup"}
                className="mx-3 fs-5 fw-semibold btn btn-primary text-white text-decoration-none text-black"
              >
                Signup
              </Link>
              <Link
                to={"/login"}
                className="fs-5 fw-semibold btn btn-outline-success text-decoration-none text-black"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
