import React, { useState } from 'react';
import './index.css';

export const CollapseContext = React.createContext({
    defaultActiveId: null,
    accordion: false,
    activeKey: null,
    setActiveKey: ()=>{},
})

const Collapse = ({
    children,
    defaultActiveId,
    accordion,
}) => {
    const [activeKey, setActiveKey] = useState(null);
    return (
        <CollapseContext.Provider value={{
            defaultActiveId,
            accordion,
            activeKey,
            setActiveKey,
        }}>
        <div className='collapse'>
            {children}
        </div>
        </CollapseContext.Provider>
    );
};

export default Collapse;