import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const Day20 = () => {
  const [input, setInput] = useState("");

  const onChange = (input) => {
    setInput(input);
  };

  const onKeyPress = (button) => {
    const updatedInput = input + button;
    setInput(updatedInput);
  };

  return (
    <div style={{width:'60rem'}} className="m-auto">
      <div className="form-floating mb-2" >
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          defaultValue={input}
        />
        <label htmlFor="floatingTextarea">Your String..!!</label>
      </div>

      <Keyboard onChange={onChange} onKeyPress={onKeyPress} />
    </div>
  );
};

export default Day20;
