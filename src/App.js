import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./components/About";

//https://Sreedev-Github.github.io/TextUtils-React = use this if u want to host on git.. replace the homepage name in package.json to this

function App() {
  const [mode, setMode] = useState("light"); // Wheather dark mode is enabled or not
  const [toggleText, setText] = useState("Light Mode"); // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [btnTheme, setBtnTheme] = useState("primary");
  // We are converting Alert into an object so that we can use multiple values for it
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        setText("Dark Mode");
        document.body.style.backgroundColor = "#1d1c26";
        showAlert("Dark mode has been enabled", "success");
        setBtnTheme("primary");
        document.title = "TextUtils - Dark Mode";
      } else if(mode === "dark") {
        setMode("light");
        setText("Light Mode");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
        setBtnTheme("primary");
        document.title = "TextUtils - Light Mode";
      }
    };
  

  return (
      <BrowserRouter basename="/">
        <Navbar
          title="Text Utils"
          placeholder="Search Here..."
          mode={mode}
          toggleMode={toggleMode}
          btnText={toggleText}
        />
        <Alert alert={alert} />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Couonter, Text to Speech" mode={mode} showAlert={showAlert} btnColor={btnTheme} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

//React makes things easier by letting us use JS and CSS in the HTML itself.
// Though this is often called as JSX and not HTML.

// The way of using things change so you need to understand that on the go..
// Like to give a class to the HTML we use className.
// Also React prefers camelCase

// We have to make sure that we are wrapping everything we need in a element like in the above example we have div with class name App wrapping everything in it.
// So like if we add a <h1></h1> before that div it won't compile and we can avoid it using blank code syntax which is called as JSX Fragment.
// We use it like this <> </> we don't write anything in it.

// In react you need to make sure you are closing the img, input and other tags like this which has no closin tag.
// You will be closing it like this <img src={logo} className="App-logo" alt="logo" />

// Bebel is used to compiles the JSX down to React.createElement

//Props are some variables which we pass in the actual component so that we can reuse them and change the data or whatever we have used it for later when required.