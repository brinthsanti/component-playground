import React from 'react';
import classNames from 'classnames';

const Header = React.forwardRef(({ children, className, style }, ref) => {
    const prefixClass = 'layout-header';
    return (
        <header
            ref={ref}
            className={classNames(prefixClass, className)}
            style={style}
        >
            {children}
        </header>
    );
});

export default Header;