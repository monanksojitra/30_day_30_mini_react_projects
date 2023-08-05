import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      if (isNaN(result)) {
        setInput("Error");
      } else {
        setInput(result.toString());
        setHistory((prevHistory) => [
          ...prevHistory,
          { expression: input, result },
        ]);
      }
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };
  const historycler = () => {
    setHistory([]);
  };
  return (
    <div className="container">
      <h3 className="p-2">Day-1 Calculator</h3>
      <div className="row align-items-md-stretch my-4">
        <div className="col-md-6">
          <div className="text-bg-dark rounded-3">
            <div className="col-9 align-item-center m-auto">
              <div className="calculator  p-4 rounded-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Value"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="buttons">
                  <div className="row">
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("7")}
                    >
                      7
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("8")}
                    >
                      8
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("9")}
                    >
                      9
                    </button>
                    <button
                      className="col btn btn-primary m-1"
                      onClick={() => handleButtonClick("/")}
                    >
                      ÷
                    </button>
                  </div>
                  <div className="row">
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("4")}
                    >
                      4
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("5")}
                    >
                      5
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("6")}
                    >
                      6
                    </button>
                    <button
                      className="col btn btn-primary m-1"
                      onClick={() => handleButtonClick("*")}
                    >
                      ×
                    </button>
                  </div>
                  <div className="row">
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("1")}
                    >
                      1
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("2")}
                    >
                      2
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("3")}
                    >
                      3
                    </button>
                    <button
                      className="col btn btn-primary m-1"
                      onClick={() => handleButtonClick("-")}
                    >
                      -
                    </button>
                  </div>
                  <div className="row">
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick("0")}
                    >
                      0
                    </button>
                    <button
                      className="col btn btn-secondary m-1"
                      onClick={() => handleButtonClick(".")}
                    >
                      .
                    </button>
                    <button
                      className="col btn btn-success m-1"
                      onClick={handleCalculate}
                    >
                      =
                    </button>
                    <button
                      className="col btn btn-primary m-1"
                      onClick={() => handleButtonClick("+")}
                    >
                      +
                    </button>
                  </div>
                  <div className="row mt-3">
                    <button
                      className="col btn btn-danger"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 bg-body-tertiary border rounded-3">
            <div className="col-10">
              <div className="result-history p-4 rounded-3 bg-light">
                <h4>Result History</h4>

                {history.length === 0 ? (
                  <p>No history yet.</p>
                ) : (
                  <>
                    <div className="row my-3 w-25">
                      <button
                        type="button"
                        onClick={historycler}
                        class="btn btn-outline-danger btn-sm"
                      >
                        Clear
                      </button>
                    </div>
                    <ul className="list-group">
                      {history.map((entry, index) => (
                        <li key={index} className="list-group-item">
                          <strong>{entry.expression}</strong> = {entry.result}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
