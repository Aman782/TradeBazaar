import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4 fontstyle">
        <div className="container-fluid">
          <div className="row">
            
            {/* About Section */}
            <div className="col-md-4">
              <h5 className="fw-bold">About TradeBaazaar</h5>
              <p>
                TradeBaazaar is a modern stock trading platform designed to make investing simple, secure, and accessible to everyone. Your journey to financial success starts here!
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="col-md-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div className="col-md-4">
              <h5 className="fw-bold">Contact Us</h5>
              <p>Email: <a href="mailto:support@tradebaazaar.com" className="text-white text-decoration-none">support@tradebaazaar.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-white text-decoration-none">+1 234 567 890</a></p>
              <p>Address: 123 Financial Street, Investment City, MarketLand</p>
              <div>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

          </div>
          
          {/* Copyright Section */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} TradeBaazaar. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
