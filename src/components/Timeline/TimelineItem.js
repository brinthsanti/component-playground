import React from 'react';
import classNames from 'classnames';
import './index.css';

const TimelineItem = ({ className, children }) => {
    const itemClassName = classNames(
        {
          [`timeline-item`]: true,
        },
        className,
      );
    
    return (
        <div className={itemClassName}>
            <div className='timeline-item-head'></div>
            <div className='timeline-item-tail'></div>
            <div className='timeline-item-content'>
            {children}
            </div>    
        </div>
    );
};


export default TimelineItem;