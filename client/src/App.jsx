
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';


function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt-token"));

  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp setToken={setToken} />}></Route>
        <Route path='/login' element={<LogIn setToken={setToken} />}></Route>
        <Route path='/home' element={<Home token={token} />}></Route>
      </Routes>
    </>
  )
}

export default App

