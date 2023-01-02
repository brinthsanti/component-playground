import React from 'react';
import { Progress as AntProgress} from 'antd';
import { Progress } from '../components/Progress';

const ProgressExamples = () => {
    return (
        <div>
            <h3>Ant Progress</h3>
            <AntProgress percent={30} />
            <h2>My Progress</h2>
            <Progress percent={30}/>
        </div>
    );
};

export default ProgressExamples;