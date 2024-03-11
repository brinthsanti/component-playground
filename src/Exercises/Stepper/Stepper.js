import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.css";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

  const progressWidth = (currentStep - 1) * (100 / (steps.length - 1));
  console.log(progressWidth);
  return (
    <div className="newstepper">
      <div className="stepper__container">
        {steps.map((step) => (
          <Step
            key={step.id}
            step={step}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        ))}
      </div>
      <div className={`progress__line`}>
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
      </div>
    </div>
  );
}

function Step({ step, currentStep, setCurrentStep }) {
  return (
    <div className="step">
      <div
        className={`step__circle ${currentStep >= step.id ? "bg_green" : ""}`}
        onClick={() => setCurrentStep(step.id)}
      >
        {step.id}
      </div>
      <div className="step__title">{step.title}</div>
    </div>
  );
}
