import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Signup = ({setLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleOnSubmit = async(e) => {
    e.preventDefault();
      
    try {
      const response = await axios.post('https://tradebazaarbackend.onrender.com/users/register-user', {
        username,
        email,
        password,
    });
      console.log(response.data);
      setLoggedIn((pre)=> !pre);
      navigate('/');
      alert("User Registered Successfully!");
    } catch (error) {
      console.log(error);
    }

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container-fluid fontstyle py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 shadow-sm p-5 border rounded bg-white">
          <form
            onSubmit={handleOnSubmit}
            className="d-flex flex-column justify-content-evenly"
          >
            <h2 className="text-center fs-2 fw-semibold text-primary mb-4">
              Signup
            </h2>
            {/* Username Field */}
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="form-group mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="position-absolute end-0 top-50 translate-middle-y me-3 text-secondary"
                onClick={togglePasswordVisibility}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </span>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary mt-3 fw-semibold p-2">
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="text-muted">
              Already have an account?{" "}
              <Link to={"/login"} className="text-primary fw-semibold">
                Login here
              </Link>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Signup;
