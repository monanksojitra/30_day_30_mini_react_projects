import React, { useState, useEffect } from "react";

const PomodoroTimer = ({ duration, timerName }) => {
  const [minutes, setMinutes] = useState(duration);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // You could add a sound or notification here when the timer completes
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(duration);
    setSeconds(0);
  };

  return (
    <div className="card mx-5 my-1">
      <h4 className="card-title m-auto mt-4">{timerName}</h4>
      <div className="card-body m-auto">
        <span className="minutes fs-2">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <span>:</span>
        <span className="seconds fs-3">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className="controls d-flex mx-4 my-2">
        <button className="btn btn-success m-2" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="btn btn-danger m-2" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

function Day17() {
  return (
    <div className="d-flex">
      <PomodoroTimer duration={25} timerName="Work Timer" />
      <PomodoroTimer duration={10} timerName="Short Break Timer" />
      <PomodoroTimer duration={5} timerName="Long Break Timer" />
    </div>
  );
}

export default Day17;
