import React from 'react';
import classNames from 'classnames';

const Col = (
    {
        children,
        className,
        span
    }
) => {
    const prefixClass = 'col';
    const classes = classNames(
        prefixClass,
        {
            [`${prefixClass}-${span}`]: span !== undefined,
        },
        className
    );
    return (
        <div
            className={classes}
        >
            {children}
        </div>
    );
};

export default Col;