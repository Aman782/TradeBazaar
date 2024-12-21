import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
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
              Login
            </h2>
            
            {/* Email Input */}
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

            {/* Password Input with Eye Icon */}
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
              Login
            </button>
          </form>

          


        </div>
      </div>
    </div>
  );
};

export default Login;
