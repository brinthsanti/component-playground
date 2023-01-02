import React from 'react';
import classNames from 'classnames';
import './index.css';

const Row = React.forwardRef(({
    children,
    className,
    justify,
    align,
    wrap,
    style
}, ref) => {
    const prefixClass = 'row';
    const classes = classNames(
        prefixClass,
        {
            [`${prefixClass}-no-wrap`]: wrap === false, // this is cool
            [`${prefixClass}-${justify}`]: justify,
            [`${prefixClass}-${align}`]: align,
        },
        className,
    );
    return (
        <div
            className={classes}
            ref={ref}
            style={{...style }}
        >
            {children}
        </div>
    );
})

export default Row;