import React, { useContext, useState, useRef, useEffect } from "react";

import './index.css';
export default function Stepper({ steps }) {
    const [currentStep, setCurrentStep] = useState(0);
  
  
  
    function handleStepChange(step){
         if(step >= 0 && step < steps.length){
          setCurrentStep(step);
         }
    }
    return (
      <div className="stepper">
        <div className="steps-container">
          <div className="steps">
            {
              steps.map((step, index) => {
                return <div key={step.label}>
                  <button
                  className={index === currentStep ? 'active': ''}
                  >{index + 1}</button>
                  {index !== steps.length-1 && <div className="line"></div>}
                  <h5>{step.label}</h5>
                </div>
              })
            }
          </div>
          
        </div>
        <div className="content">
          {steps[currentStep].component}
        </div>
        <div className="controls">
          <button onClick={()=>handleStepChange(currentStep-1)}>BACK</button>
          <button onClick={()=>handleStepChange(currentStep+1)}>NEXT</button>
        </div>
      </div>
    );
  }
  