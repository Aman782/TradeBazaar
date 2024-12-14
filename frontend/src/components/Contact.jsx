import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container my-5 fontstyle">
        <div className="row">
          {/* Contact Form Section */}
          <div className="col-md-6">
            <h2 className="mb-4">Get in Touch</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>``
              <button type="submit" className="btn btn-dark">Send Message</button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="col-md-6">
            <h2 className="mb-4">Contact Information</h2>
            <p><strong>Email:</strong> <a href="mailto:support@tradebaazaar.com">support@tradebaazaar.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></p>
            <p><strong>Address:</strong></p>
            <p>123 Financial Street,<br /> Investment City,<br /> MarketLand.</p>
            
            <h3 className="mt-4">Follow Us</h3>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-primary me-3">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-info me-3">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-primary">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
