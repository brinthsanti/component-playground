import React from 'react';

const DropdownToggle = ({
    children,
    className,
    toggle,
}) => {
    return (
        <div
            className={className}
            onClick={toggle}
        >
            {children}
        </div>
    );
};

export default DropdownToggle;