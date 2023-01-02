import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import './index.css';

const Drawer = ({ children,show, title, onClose }) => {
    const [transform, setTransform] = useState(0);

    useEffect(()=>{
      if(show){
        setTransform(0)
        return;
      }
      setTransform(100)
    },[show])
    return ReactDOM.createPortal(
        (
            <>
                {
                     <div className='drawer'>
                       {show && <div className="drawer-mask"></div>}
                        <div className='drawer-content' style={{transform: `translate(${transform}%)`}}>
                            <div className='drawer-header'>
                                <button onClick={onClose}>X</button>
                                {title}
                                </div>
                        {children}
                        </div>
                    </div>
                }
            </>
        ),
        document.getElementById('portal'));
};

export default Drawer;