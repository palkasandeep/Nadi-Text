import React from 'react';
import { useState } from 'react';
import './App.css';
import Textform from './Textform';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('White mode has been enabled', 'success');
      document.title = 'Textutils - Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#331963';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Textutils - Dark Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils5" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
         <Textform showAlert={showAlert} heading="Enter your text" mode={mode} />
          </div>
      </>
  );
}

export default App;
