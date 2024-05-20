
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';


function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt-token"));
  const [setHome, setNewHome] = useState(false);
  return (
 
      <div>
        <LogIn setToken={setToken}> </LogIn>
      </div>
  );
}
export default App

