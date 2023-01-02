import React, { useRef, useState } from 'react';
import { Notification } from '../components/Notification';

const NotificationExamples = () => {
    const notificationRef = useRef(null);

    function handleClick(){
        if(notificationRef.current){
            notificationRef.current.open();
        }
    }
    return (
        <div>
            <button onClick={handleClick}>show Notification</button>
            <Notification ref={notificationRef}/>
        </div>
    );
};

export default NotificationExamples;