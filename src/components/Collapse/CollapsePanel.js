import React, { useContext, useState } from 'react';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { CollapseContext } from './Collapse';

const CollapsePanel = ({
    header,
    id,
    children,
}) => {

    const { defaultActiveId, accordion, setActiveKey, activeKey } = useContext(CollapseContext);
    const [showContent, setShowContent] = useState(accordion ? false : defaultActiveId.includes(id));
    function handleClick(e,id) {
        e.stopPropagation();
        setShowContent((prevState) => !prevState);
        setActiveKey(id)
    }
     const show = accordion ? activeKey === id : showContent;
    return (
        <div className='collapse-panel' onClick={(e)=>handleClick(e,id)}>
            <div className='panel-header'>
                <div className='panel-header-icon'>
                    <RightOutlined
                       rotate={show ? 90 : undefined}
                    />
                </div>
                <div className='panel-header-content'>
                    {header}
                </div>
            </div>
            {
                show && <div className='panel-content'>
                    {children}
                </div>
            }
        </div>
    );
};

export default CollapsePanel;

