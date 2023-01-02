import React from 'react';
import classNames from 'classnames';

const Content = React.forwardRef(({ children, className, style }, ref) => {
    const prefixClass = 'layout-content';
    return (
        <main
            ref={ref}
            className={classNames(prefixClass, className)}
            style={style}
        >
            {children}
        </main>
    );
});

export default Content;