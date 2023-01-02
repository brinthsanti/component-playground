import React from 'react';
import classNames from 'classnames';
import DropdownToggle from './DropdownToggle';
import DropdownItems from './DropdownItems';
import './index.css';

export const Dropdown = ({
    children,
    className,
    isOpen,
    toggle,
}) => {
    const prefixClass = 'dropdown';
    const classes = classNames([
        prefixClass,
        className
    ]);
    return (
        <div
            className={classes}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isOpen,
                    toggle,
                    prefixClass,
                }))}
        </div>
    );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Items = DropdownItems;

