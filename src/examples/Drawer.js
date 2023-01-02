import React, { useState } from 'react';
import { Drawer } from '../components/Drawer';

const DrawerExamples = () => {
    const [show, setShow] = useState(false);
    function handleClick(){
        setShow((prev)=> !prev)
    }
    return (
        <div>
            <button onClick={handleClick}> show me the drawer</button>
            <Drawer show={show} onClose={()=>setShow(false)} title="Drawer">
                Hello i'm the drawer
                </Drawer>
        </div>
    );
};

export default DrawerExamples;