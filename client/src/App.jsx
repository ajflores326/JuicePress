
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import LogIn from './components/LogIn';
// import Home from './components/Home';
import JPLogo from './images/JPLogo.png';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("jwt-token"));

//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<SignUp setToken={setToken} />}></Route>
//         <Route path='/login' element={<LogIn setToken={setToken} />}></Route>
//         <Route path='/home' element={<Home token={token} />}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App

export default function App() {
  return (

      <div>
        <h1 className="text-4xl font-semibold underline text-green-400">Sign Up</h1>
          <input className="rounded" placeholder="First Name"></input>
          <input className="rounded" placeholder="Last Name"></input>
          <input className="rounded" placeholder="Empolyee ID" type="number"></input>
          <input className="rounded" placeholder="Password" type="password"></input>
          <button className="block bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Sign Up</button>
          <p>Already have an account?</p>
          <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Log In</button>

          <img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
        </div>
  )
}

