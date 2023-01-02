import React from 'react';
import './index.css';

const Progress = ({ percent = 0 }) => {
    return (
        <div className='progress'>
            <div className='progress-inner'>
            <div className="progress-bg" style={{width: `${percent}%`}}></div>
            </div>
            <span className='progress-text'>{`${percent}%`}</span>
        </div>
    );
};

export default Progress;