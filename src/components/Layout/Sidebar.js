import React, { useState, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { LayoutContext } from './Layout';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

const generateId = (() => {
    let i = 0;
    return (prefix) => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

const Sidebar = React.forwardRef(
    (
        {
            children,
            className,
            style,
            width = 200,
            collapsedWidth = 80,
            collapsible = false,
            reverseArrow = false,
            defaultCollapsed = false,
            trigger,
            fixed,
            ...props
        },
        ref
    ) => {
        const { sidebarHook } = useContext(LayoutContext);
        const [collapsed, setCollapsed] = useState(
            'collapsed' in props ? props.collapsed : defaultCollapsed,
        );
        const toggle = () => {
            // handleSetCollapsed(!collapsed, 'clickTrigger');
            setCollapsed(!collapsed);
        };
        useEffect(() => {
            if ('collapsed' in props) {
                setCollapsed(props.collapsed);
            }
        }, [props.collapsed]);
        useEffect(() => {
            const uniqueId = generateId('layout-sidebar-');
            sidebarHook.addSidebar(uniqueId);
            return () => sidebarHook.removeSidebar(uniqueId);
        }, []);

        const prefixClass = 'layout-sidebar';
        const rawWidth = collapsed ? collapsedWidth : width;
        const sidebarWidth = typeof rawWidth === 'number' ? `${rawWidth}px` : String(rawWidth); // dynamically setting width
        const divStyle = {
            ...style,
            flex: `0 0 ${sidebarWidth}`,
            width: sidebarWidth,
        };

        const iconObj = {
            expanded: <LeftOutlined />,
            collapsed: <RightOutlined />,
        };
        const status = collapsed ? 'collapsed' : 'expanded';
        const defaultTrigger = iconObj[status];
        const triggerDom =
            trigger !== null
                ? (
                    <div
                        className={`${prefixClass}-trigger`}
                        onClick={toggle}
                        style={{ width: sidebarWidth }}
                    >
                        {trigger || defaultTrigger}
                    </div>
                )
                : null;

        const classString = classNames(
            prefixClass,
            {
               [ `${prefixClass}-fixed`]: fixed,
            },
            className
        );
        return (
            <aside
                ref={ref}
                className={classString}
                style={divStyle}
            >
                <div>
                    {children}
                </div>
                {collapsible ? triggerDom : null}
            </aside>
        );
    });

export default Sidebar;