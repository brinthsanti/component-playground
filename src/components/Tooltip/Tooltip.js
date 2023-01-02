import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom'
import './index.css';
const Tooltip = ({ children, title }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const { offsetLeft, clientWidth } = containerRef.current;
            setOffsetLeft(offsetLeft + (Math.floor(clientWidth / 2) - 30));
            console.log(offsetLeft + (Math.floor(clientWidth / 2) - 30))
        }

    }, []);

    function getTooltip() {
        if (showTooltip) {
            return ReactDom.createPortal(
                (
                    <div className='tooltip' style={{ left: `${offsetLeft}px` }}>
                        <div className='tooltip-content'>
                            {title}
                        </div>
                    </div>
                ),
                document.getElementById('portal')
            )
        }
        return null;
    }
    return (
        <div
        className='tooltip-container'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            ref={containerRef}
        >
            {children}
            {getTooltip()}
        </div>
    );
};

export default Tooltip;