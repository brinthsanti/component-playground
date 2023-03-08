import { useEffect, useState } from "react";
import "./index.scss";

export default function Timer({duration = 5000}){
  const [time, setTime] = useState(duration);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let intervalId;
     if(isRunning){
         if(time <= 0){
           clearInterval(intervalId);
           handleStop();
           return;
         }
       intervalId  = setInterval(() => {
         setTime(time => time - 1000);
       }, 1000);
     }

     return ()=>{
       clearInterval(intervalId);
     }

  },[isRunning, time])

   function handleReset(){
      setTime(0);
   }

   function handleStart(){
       setIsRunning(true);
   }

   function handleStop(){
       setIsRunning(false)
   }

   const seconds = Math.floor((time % 60000)/ 1000);
   const minutes = Math.floor((time % (60 * 60000)) / 60000);
   const hour = Math.floor((time % (24 * 60 * 60000)) / (60 * 60000))
  return (
    <div className='timer'>
      <p className='time'>{hour.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
      <div className='handles'>
      { !isRunning && <button onClick={handleStart}>Start</button>}
      { isRunning &&  <button onClick={handleStop}>Stop</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

