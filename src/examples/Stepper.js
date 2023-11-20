import React from "react";
import { Stepper } from "../components/Stepper";

const steps = [
  {
    id: 1,
    label: "ACCOUNT INFORMATION",
    component: <div>Account information</div>,
  },
  {
    id: 2,
    label: "PERSONAL DETAILS",
    component: <div>PERSONAL DETAILS</div>,
  },
  {
    id: 3,
    label: "PAYMENT",
    component: <div>PAYMENT</div>,
  },
  {
    id: 4,
    label: "COMPLETE",
    component: <div>COMPLETE</div>,
  },
];
const StepsExample = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stepper steps={steps} />
    </div>
  );
};

export default StepsExample;
