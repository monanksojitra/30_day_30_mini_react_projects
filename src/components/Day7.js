import React, { useState, useEffect } from "react";

function Day7() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const tick = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes > 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else if (hours > 0) {
      setSeconds(59);
      setMinutes(59);
      setHours(hours - 1);
    } else {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, isRunning]);

  const handleStart = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleClear = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <>
      <div className="card w-50 m-auto">
        <div className="card-body">
          <h5 className="card-title">Countdown Timer</h5>
          <p className="card-text fs-5">
            Remaining Time: {hours} hours, {minutes} minutes, {seconds} seconds
          </p>
          <div className="align-items-center justify-content-center d-flex">
            {isRunning ? (
              <>
                <button
                  type="button"
                  className="btn btn-warning btn-rounded m-2"
                  onClick={handlePause}
                >
                  Pause
                </button>
              </>
            ) : (
              <>
                <div className="input-group m-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Hours"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Minutes"
                    value={minutes}
                    onChange={(e) => setMinutes(parseInt(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Seconds"
                    value={seconds}
                    onChange={(e) => setSeconds(parseInt(e.target.value))}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-rounded m-2"
                  onClick={handleStart}
                >
                  Start
                </button>
                {hours !== 0 || minutes !== 0 || seconds !== 0 ? (
                  <button
                    type="button"
                    className="btn btn-danger btn-rounded m-2"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Day7;








