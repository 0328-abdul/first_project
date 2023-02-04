// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
import Footer from "./components/Footer"

import React, { useState } from 'react'
import Alerts from "./components/Alerts";


function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleTheme = () => {
    if (mode === 'dark') {
      setMode('light')
      setModeText('dark')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Dark mode has been disabled', 'danger')
    } else {
      setMode('dark')
      setModeText('light')
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} modeText={modeText} handleTheme={handleTheme} />
      <Alerts alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" showAlert={showAlert} />
        <Footer mode={mode} />
      </div>
    </>
  )
}

export default App;
