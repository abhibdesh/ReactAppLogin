import "./App.css";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{

    setAlert({
      msg: message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)

  }
  const toggleMode = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#212523";
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title='NewText' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
      <Route path="/about" element={<About />} />
          <Route path="/" element={ <><Logo id="logoo"/>
<TextForm heading="Login" onShowAlert={showAlert}/></>     } />
      </Routes>
     
    </Router>
      
    </>
  );
}

export default App;
