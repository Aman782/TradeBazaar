import React from "react";

const Profile = () => {
  return (
    <>
      <div
        className="container-fluid fontstyle py-5 border"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center">
            <img
              src="/images/profileImg.jpg"
              alt="Profile"
              style={{
                borderRadius: "50%",
                height: "350px",
                width: "350px",
                objectFit: "cover",
                border: "4px solid #3498db",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          {/* Profile Content */}
          <div className="col-md-5">
            <h2
              className="fw-bold text-black mb-4"
              style={{
                fontFamily: "'Roboto', sans-serif",
                letterSpacing: "1px",
              }}
            >
              Founder of <span className="text-primary">TradeBazaar</span>
            </h2>
            <p
              className="text-secondary"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              <b>Aman</b> bootstrapped and founded <span className="text-primary">TradeBazaar</span> in 2024 to overcome
              the hurdles he faced during his decade-long stint as a trader. Today,
              TradeBazaar has transformed the landscape of the Indian broking
              industry.
            </p>
            <p
              className="fw-semibold text-dark"
              style={{
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              He is a BTech Final Year Undergraduate from IMSEC, Ghaziabad.
            </p>
            <span
              className="text-muted"
              style={{
                fontSize: "1.1rem",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Building tech products is his passion.
            </span>

            <p className="mt-4 fs-5 fw-bold text-dark">Connect On</p>

            {/* Social Links */}
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary me-3"
                style={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-info me-3"
                style={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
                style={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
