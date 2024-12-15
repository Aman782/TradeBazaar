import React, { useState } from "react";

const Dynamic = () => {
  const keywords = ["Future", "Commodities", "Options", "Currencies"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  let len = keywords.length;

  setTimeout(() => {
    setText(keywords[index % len]);
    setIndex((pre) => pre + 1);
  }, 2000);

  return (
    <>
      <div className="container-fluid fontstyle p-5" style={{ backgroundColor: "#f4f8fc" }}>
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-5 card p-4 shadow-sm" style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "2px solid #3498db"
              }}>
            <h2 className="text-center">
              Enjoy trading in <br></br> <span style={{color:"blue"}}>{text}</span>
            </h2>
            <div className="row d-flex justify-content-evenly align-items-center p-2">
              <div className="col-md-5 card d-flex p-3 justify-content-center align-items-center" style={{backgroundColor:"#fee"}}>
                <span className="fs-2">&#8377;0</span>
                <h5>Commission</h5>
                <p className="text-center btn btn-primary">
                AMC & commissions* on Mutual Funds and IPO
                </p>
              </div>

              <div className="col-md-5 card d-flex p-3 justify-content-center align-items-center" style={{backgroundColor:"#fee"}}>
                <span className="fs-2">&#8377;20</span>
                <h5>Commission</h5>
                <p className="text-center btn btn-primary">
                Per order on Equity, F&O, Commodity and Currency
                </p>
              </div>

              <button className="btn btn-lg btn-dark fs-5 m-3" style={{width:"60%"}}>Open Free Demat Account <i className="fa-solid fa-arrow-trend-up"></i></button>
            </div>
          </div>

         <div className="col-md-6">
            <img src="/images/HeroImg5.jpg"></img>
         </div>
         
        </div>
      </div>
    </>
  );
};

export default Dynamic;
