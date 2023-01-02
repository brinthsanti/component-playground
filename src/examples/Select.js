import React from 'react';
import { Select, Option } from '../components/Select';

const children= [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i} value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const SelectExamples = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Select
                style={{ width: '300px' }}
                placeholder="please select..."
            >
                {children}
            </Select>
        </div>
    );
};

export default SelectExamples;