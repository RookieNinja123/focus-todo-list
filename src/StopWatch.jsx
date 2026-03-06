import React, {useState, useEffect, useRef} from "react"

function Stopwatch({savedTime, updateTime}){

    const[isRunning , setIsRunning] = useState(false);
    const[elapsedTime, setElapsedTime] = useState(savedTime);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (!isRunning) return;
            intervalIdRef.current =  setInterval(() => {
             const time = Date.now() - startTimeRef.current;
             setElapsedTime(time);
            //  updateTime(time);
            },100)

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
        updateTime(elapsedTime);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
        updateTime(0);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000 )/ 10 );

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliseconds = String(miliseconds).padStart(2,"0");

        return`${hours}:${minutes}:${seconds}:${miliseconds}`;

    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button onClick = {start} className="start-button">Start</button>
                <button onClick = {stop} className="stop-button">Stop</button>
                <button onClick = {reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
    
}

export default Stopwatch