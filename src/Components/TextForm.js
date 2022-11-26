import React, { useState } from "react";
export default function TextForm(props) {
  const [Text, setText] = useState("");

  const uppercase = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UPPERCASE", "success");
  };
  const lowercase = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase", "success");
  };
  const cleartext = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("Text is cleared", "success");
  };
  const copytext = () => {
    navigator.clipboard.writeText(Text);
    document.getSelection().removeAllRanges();
    props.showalert("Copied to clipboard", "success");
  };
  const removes = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces are removed", "success");
  };
  const onchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            value={Text}
            onChange={onchange}
            id="example FormControlTextareal"
            rows="8"
          ></textarea>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-3"
            onClick={uppercase}
          >
            UPPERCASE
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-3 "
            onClick={lowercase}
          >
            lowercase
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-3"
            onClick={cleartext}
          >
            Clear Text
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-3"
            onClick={copytext}
          >
            Copy Text
          </button>
          <button
            disabled={Text.length === 0}
            className="btn btn-primary mx-3 my-3 "
            onClick={removes}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>{" "}
      <hr />
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary </h2>
        <p>
          {
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {Text.length} Characters
        </p>
        <p>
          Can be read in{" "}
          {0.008 *
            Text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes
        </p>
        <hr />
      </div>
    </>
  );
}
