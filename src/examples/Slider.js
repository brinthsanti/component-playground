import React from 'react';
import { Slider } from '../components/Slider';

const SliderExamples = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // alignItems: 'center',
                height: '100vh',
            }}
        >
            <Slider />
        </div>
    );
};

export default SliderExamples;