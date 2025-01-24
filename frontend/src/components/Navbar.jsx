import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  
  const navigate = useNavigate();

  const handleOnLogout = async ()=>{
    try {
      const res = await axios.get("https://tradebazaarbackend.onrender.com/users/logout-user",  { withCredentials: true });
      console.log(res);
  
      setLoggedIn(false);
      navigate('/');
      alert("User LoggedOut Successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="container-fluid fontstyle py-2"
        style={{ backgroundColor: "#f8e9e9", border: "0.0001 rem solid black" }}
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
          <div className="auth ms-auto">
        {!isLoggedIn?<> <Link to={"/signup"} className="btn btn-primary btn-lg fs-6 mx-2 fontstyle">
           Signup
        </Link>

        <Link to={"/login"} className="btn btn-outline-success btn-lg fs-6 mx-2 fontstyle">
           Login
        </Link></>: <Link className="btn btn-outline-success btn-lg fs-6 mx-2 fontstyle" onClick={handleOnLogout}>
           Logout
        </Link>}
         </div>
        
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
