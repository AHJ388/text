import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };
  const togglemode1 = () => {
    document.body.style.backgroundColor = "lightskyblue";
    showalert("Blue mode has been enabled", "warning");
  };
  const togglemode2 = () => {
    document.body.style.backgroundColor = "lightgreen";
    showalert("Green mode has been enabled", "danger");
  };
  const togglemode3 = () => {
    document.body.style.backgroundColor = "red";
    showalert("Red mode has been enabled", "success");
  };
  const togglemode4 = () => {
    document.body.style.backgroundColor = "yellow";
    showalert("Yellow mode has been enabled", "primary");
  };
  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        about="About"
        togglemode={togglemode}
        togglemode1={togglemode1}
        togglemode2={togglemode2}
        togglemode3={togglemode3}
        togglemode4={togglemode4}
        mode={mode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        <TextForm showalert={showalert}mode={mode} heading="UPPERCASE or lowercase"/>
      </div>

      {/* <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/"element={ }
        ></Route>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
