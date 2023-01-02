import React from 'react';
import classNames from 'classnames';
import './index.css';

export const LayoutContext = React.createContext({
    sidebarHook: {
        addSidebar: () => null,
        removeSidebar: () => null,
    },
});

const Layout = React.forwardRef((
    {
        children,
        className,
        style,
        hasSidebar,
    },
    ref) => {
    const [sidebars, setSidebars] = React.useState([]);
    const contextValue = React.useMemo(
        () => ({
            sidebarHook: {
                addSidebar: (id) => {
                    setSidebars(prev => [...prev, id]);
                },
                removeSidebar: (id) => {
                    setSidebars(prev => prev.filter(currentId => currentId !== id));
                },
            },
        }),
        [],
    );
    const prefixClass = 'layout'
    const classString = classNames(
        prefixClass,
        {
            [`${prefixClass}-has-sider`]: typeof hasSidebar === 'boolean' ? hasSidebar : sidebars.length > 0,
        },
        className,
    );
    return (
        <LayoutContext.Provider value={contextValue}>
            <section
                ref={ref}
                className={classString}
                style={style}
            >
                {children}
            </section>
        </LayoutContext.Provider>
    );
});

export default Layout;