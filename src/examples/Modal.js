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
            onClose={() => setShowModal(false)}
            >
                Hey i'm your modal
            </Modal>
        </div>
    );
};

export default ModalExamples;