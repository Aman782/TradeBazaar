import React from 'react';// Install react-bootstrap if not already done

const Pricing = () => {
  return (
    <>
      <div
        className="container-fluid fontstyle p-5"
        style={{
          background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
          borderRadius: '10px',
        }}
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="fs-2 fw-semibold text-primary">
              Transparent Pricing, No Hidden Charges
            </h2>
            <p className="text-muted">Get started with complete clarity.</p>
          </div>
        </div>

        <div className="row py-4 d-flex justify-content-evenly">
          {[
            {
              price: '&#8377;0',
              title: 'Account Opening',
              description: 'Demat + Trading',
              bgColor: '#fee',
              icon: 'fa-user-plus',
            },
            {
              price: '&#8377;0',
              title: 'Commission',
              description: 'Mutual Funds and IPOs',
              bgColor: '#f9f7d9',
              icon: 'fa-hand-holding-usd',
            },
            {
              price: '&#8377;0',
              title: 'Demat AMC',
              description: 'Maintenance Charges',
              bgColor: '#fef4e6',
              icon: 'fa-wallet',
            },
            {
              price: '&#8377;20',
              title: 'Brokerage',
              description: 'Equity & F&O',
              bgColor: '#e6f7ff',
              icon: 'fa-chart-line',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="col-md-2 card d-flex flex-column align-items-center p-3 shadow-sm"
              style={{
                backgroundColor: card.bgColor,
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')
              }
            >
              <i
                className={`fas ${card.icon} fa-2x text-primary mb-3`}
                style={{ transition: 'transform 0.3s' }}
              ></i>
              <span
                className="fs-2 text-dark fw-bold"
                dangerouslySetInnerHTML={{ __html: card.price }}
              ></span>
              <h5 className="text-dark mt-2">{card.title}</h5>
              <p className="text-center btn btn-primary mt-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
