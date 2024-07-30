import React, { useState } from "react";

const Text = (props) => {
  const upClick = () => {
    setText(text.toUpperCase());
  };
  const lpClick = () => {
    setText(text.toLowerCase());
  };
  const Clear = () => {
    setText(" ");
  };
  const handleClick = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "grey" }}
      >
        <div className="my-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control my-3"
            autoFocus
            value={text}
            onChange={handleClick}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter Text..."
          ></textarea>
          <button className="btn btn-primary" onClick={upClick}>
            To Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={lpClick}>
            To Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={Clear}>
            To CLear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "grey" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter tour text above Text..."}</p>
      </div>
    </>
  );
};

export default Text;
