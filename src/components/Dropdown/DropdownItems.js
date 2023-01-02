import React from 'react';
import classNames from 'classnames';

const DropdownItems = ({ children, isOpen, prefixClass, className }) => {
    const classes = classNames([
        `${prefixClass}-items`,
        className
    ]);
    return (
        <>
            {isOpen && <div className={classes}>
                {children}
            </div>
            }
        </>
    );
};

export default DropdownItems;