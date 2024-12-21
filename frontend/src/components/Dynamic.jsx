import React, { useState, useEffect } from "react";

const Dynamic = () => {
  const keywords = ["Future", "Commodities", "Options", "Currencies"];
  const [text, setText] = useState(keywords[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(keywords[(index + 1) % keywords.length]);
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div
        className="container-fluid fontstyle py-5"
        style={{ backgroundColor: "#f4f8fc" }}
      >
        <div className="row d-flex justify-content-evenly align-items-center">
          {/* Left Section */}
          <div
            className="col-md-5 card p-4 shadow-sm"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              border: "2px solid #3498db",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 className="text-center fw-bold">
              Enjoy trading in <br />
              <span
                style={{
                  color: "blue",
                  fontWeight: "bold",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {text}
              </span>
            </h2>
            <div className="row d-flex justify-content-evenly align-items-center p-3">
              {/* Card 1 */}
              <div
                className="col-md-5 card d-flex p-3 justify-content-center align-items-center shadow-sm"
                style={{
                  background:
                    "linear-gradient(to bottom right, #f9f9f9, #ffffff)",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span className="fs-2 text-success">&#8377;0</span>
                <h5 className="text-primary fw-semibold mt-2">Commission</h5>
                <p className="text-center text-secondary">
                  AMC & commissions* on Mutual Funds and IPO
                </p>
              </div>
              {/* Card 2 */}
              <div
                className="col-md-5 card d-flex p-3 justify-content-center align-items-center shadow-sm"
                style={{
                  background:
                    "linear-gradient(to bottom right, #f9f9f9, #ffffff)",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span className="fs-2 text-danger">&#8377;20</span>
                <h5 className="text-primary fw-semibold mt-2">Commission</h5>
                <p className="text-center text-secondary">
                  Per order on Equity, F&O, Commodity and Currency
                </p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="text-center">
              <button
                className="btn btn-lg btn-primary fs-5 mt-4"
                style={{
                  width: "80%",
                  borderRadius: "30px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007bff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3498db")
                }
              >
                Open Free Demat Account{" "}
                <i className="fa-solid fa-arrow-trend-up"></i>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center">
            <img
              src="/images/HeroImg5.jpg"
              alt="Hero"
              className="img-fluid shadow-lg"
              style={{
                borderRadius: "15px",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dynamic;
