import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Modal = ({show, toggle,renderItems, modalContent={}}) => {
  return (
    <div>
      {show && (
        <div className="modal-overlay" onClick={()=>toggle(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={()=>toggle(false)}>&times;</span>
            {renderItems(modalContent)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
