import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const swapcolour = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode Enabled", "success");
      // document.title = "TEXTUTILS - DARKMODE";

    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
      // document.title = "TEXTUTILS - LIGHTMODE";
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} swapcolour={swapcolour} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform heading="Enter Text Here To Analyse" mode={mode} showalert={showalert} />
          </Route>
        </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
