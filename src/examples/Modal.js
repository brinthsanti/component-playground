import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const ModalExamples = () => {
    const [showModal, setShowModal] = useState(false)
    function handleClick(){
        setShowModal(prev => !prev);
    }
    return (
        <div>
            <h3>My Modal</h3>
            <button onClick={handleClick}>click here to open the modal</button>
            <Modal
            show={showModal}
            title="My modal"
            toggle={setShowModal}
            renderItems={(modalContent) => <h3> Hey i'm your modal</h3>}
/>
        </div>
    );
};

export default ModalExamples;