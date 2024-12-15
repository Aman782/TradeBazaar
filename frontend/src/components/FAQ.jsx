import React from 'react';

const FAQ = () => {
  return (
    <div className="container my-5 fontstyle">
      <h2 className="text-center mb-4" style={{ color: "#2c3e50", fontWeight: "bold" }}>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ fontWeight: "bold", color: "#3498db" }}
            >
              What is TradeBazaar, and how does it work?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              TradeBazaar is a platform designed to simplify trading and investment. It provides tools, insights, and features to help you manage risks and grow your portfolio with confidence.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ fontWeight: "bold", color: "#3498db" }}
            >
              Is TradeBazaar free to use?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, TradeBazaar offers free basic features to help you get started. Premium features may require a subscription for advanced tools and analytics.
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ fontWeight: "bold", color: "#3498db" }}
            >
              How secure is my data on TradeBazaar?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Your data is our top priority. TradeBazaar uses advanced encryption and secure servers to ensure that your personal and trading information is safe and protected.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{ fontWeight: "bold", color: "#3498db" }}
            >
              Can I track my investments on TradeBazaar?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Absolutely! TradeBazaar provides detailed dashboards and tracking tools to help you monitor the performance of your investments in real time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
