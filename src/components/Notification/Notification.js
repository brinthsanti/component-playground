import React, { useState, useImperativeHandle, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Notification = React.forwardRef((props, ref) => {
    const [show, setShow] = useState(false);
    useImperativeHandle(ref, () => ({
        open: () => {
            setShow(true);
        }
    }));

    useEffect(()=>{
        let interavalId = null;
      if(show){
        interavalId = setInterval(()=>{
            setShow(false);
        }, 3000)
      }
      return ()=>{
        if(interavalId)
        clearInterval(interavalId);
      }
    },[show])
    return ReactDOM.createPortal(
        <>
            {
                show && (
                    <div className="notification">
                        <div className="notification-content">
                            i'm the contetn
                        </div>
                        <span
                            role="img"
                            aria-label="close"
                            className="anticon anticon-close notification-close"
                            onClick={()=>setShow(false)}
                        >
                          X
                        </span>
                    </div>
                )}
        </>,
        document.getElementById("portal")
    );
})

export default Notification;