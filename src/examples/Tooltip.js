import React from 'react';
import { Tooltip } from '../components/Tooltip';

const TooltipExamples = () => {
    return (
        <div style={{
            marginTop: '300px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            <div>
            <Tooltip title="prompt text">
                <span>Tooltip will show on mouse enter.</span>
            </Tooltip>
            </div>
        </div>
    );
};

export default TooltipExamples;