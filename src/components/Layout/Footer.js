import React from 'react';
import classNames from 'classnames';

const Footer = React.forwardRef(({ children, className, style }, ref) => {
    const prefixClass = 'layout-footer';
    return (
        <footer
            ref={ref}
            className={classNames(prefixClass, className)}
            style={style}
        >
            {children}
        </footer>
    );
});

export default Footer;