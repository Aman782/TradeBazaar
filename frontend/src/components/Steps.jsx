import React from "react";
import StepCard from './StepCard';
import PeopleCard from "./PeopleCard";

const Steps = () => {
  const stepTexts = [
    {
      id: 1,
      text: "Log in to the tradebazaar app and click on 'Get Started'.",
    },
    {
      id: 2,
      text: "Explore stocks & select your preferred one.",
    },
    {
      id: 3,
      text: "Click on buy button and enter amount.",
    },
    {
      id: 4,
      text: "Check Holdings for tracking the stock.",
    },
  ];

  return (
    <>
      <div className='container-fluid p-4 fontstyle border'>
         <div className='row p-3 d-flex justify-content-center align-items-center'>
            <div className='p-3'>
             <h2 className='text-center fs-1 fw-semibold'>Start Investment Journey with us!</h2>
            </div>

            <div className='col-md-4 card mx-4 p-2'>
              <PeopleCard srcImg={'/images/start-sip-zero-perc.svg'} content={"Log in to the tradebazaar app and click on 'Get Started'."}/>
            </div>

            <div className='col-md-4 card p-2'>
              <PeopleCard srcImg={'/images/start-sip-handshake.svg'} content={"Explore stocks & select your preferred one."}/>
            </div>
         </div>

         <div className='row p-3 d-flex justify-content-center align-items-center'>
         <div className='col-md-4 card mx-4 p-2'>
              <PeopleCard srcImg={'/images/start-sip-app-touch.svg'} content={"Click on buy button and enter amount."}/>
            </div>

            <div className='col-md-4 card p-2'>
              <PeopleCard srcImg={'/images/start-sip-asset-estimation.svg'}  content={"Check Holdings for tracking the stock."}/>
            </div>
         </div>
       </div>
    </>
  );
};

export default Steps;
