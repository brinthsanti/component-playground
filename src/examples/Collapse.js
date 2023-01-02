import React from 'react';
import { Collapse , Panel} from '../components/Collapse';
import { Collapse as AntCollapse } from 'antd';
const { Panel: AntPanel } = AntCollapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CollapseExamples = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <h3>Ant Collapse</h3>
            <AntCollapse defaultActiveKey={['1']} onChange={onChange}>
                <AntPanel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </AntPanel>
                <AntPanel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </AntPanel>
                <AntPanel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </AntPanel>
            </AntCollapse>
            <h2>My Collapse</h2>
            <Collapse defaultActiveId={['3', '2']} >
                <Panel header="This is panel header 1" id="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" id="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" id="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
            <Collapse />
        </div>
    );
};

export default CollapseExamples;