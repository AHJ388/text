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
  const removes = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces are removed", "success");
  };
  const onchange = (event) => {
    setText(event.target.value);
  };

  // function countWords(text) {
  //   let wc = text.split(" ").length;
  //   text.split(" ").forEach((word) => {
  //     if (!word.length) {
  //       wc -= 1;
  //     }
  //   });

  //   return wc;
  // }
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
              // backgroundColor: props.togglemode1 === "lightskyblue" ? "lightskyblue" : "white",
              // color: props.togglemode1 === "lightskyblue" ? "white" : "lightskyblue",
            }}
            className="form-control"
            value={Text}
            onChange={onchange}
            id="example FormControlTextareal"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-3 my-3" onClick={uppercase}>
            UPPERCASE
          </button>
          <button className="btn btn-primary" onClick={lowercase}>
            lowercase
          </button>
          <button className="btn btn-primary mx-3" onClick={cleartext}>
            Clear Text
          </button>
          <button className="btn btn-primary " onClick={removes}>
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
          {Text.split(" ").length} Words and {Text.length} Characters
        </p>
        <p>Can be read in {0.008 * Text.split(" ").length} Minutes</p>
        <hr />
      </div>
    </>
  );
}
