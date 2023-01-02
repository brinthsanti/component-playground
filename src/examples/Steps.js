import React from "react";
import { Steps as AntSteps } from "antd";
import { Steps } from "../components/Steps";

const { Step } = AntSteps;
const StepsExample = () => {
  return (
    <div>
      <h3>Ant Steps</h3>
      <AntSteps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </AntSteps>

      <h3>My Steps</h3>
      <Steps />
    </div>
  );
};

export default StepsExample;
