import { useEffect, useState } from 'react';
import './index.scss';

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(time => time + 1);
            }, 10)
        }
        return () => {
            clearInterval(intervalId);
        }
    }, [isRunning, time]);

    function handleStartStop() {
        setIsRunning(isRunning => !isRunning)
    }

    function handleReset() {
        setTime(0)
    }

      // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

    return (
        <div className='stopwatch'>
            <p className='time'>
                {hours}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </p>
            <div className='handles'>
                <button onClick={handleStartStop} className='stop'>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className='reset' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}