import { useState, useEffect } from 'react';

import './index.css';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((time) => time + 1000);
        }, 1000);
      }
  
      if (!isRunning && intervalId) {
        clearInterval(intervalId);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning, time]);
  
    function handleStart() {
      setIsRunning(true);
    }
  
    function handleStop() {
      setIsRunning(false);
    }
  
    function handleReset() {
      handleStop();
      setTime(0);
    }
  
   
     const seconds = Math.floor((time % MINUTE)/SECOND);
     const minutes = Math.floor((time % HOUR)/MINUTE);
     const hour = Math.floor((time % DAY) / HOUR);

    return (
      <div className="stopwatch">
        <p className="time">{hour.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
        <div className="handles">
          {!isRunning && <button onClick={handleStart}>Start</button>}
          {isRunning && <button onClick={handleStop}>Stop</button>}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }