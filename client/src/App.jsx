
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import LogIn from './components/LogIn';
// import Home from './components/Home';
import JPLogo from './images/JPLogo.png';
import CreateAnnouncement from './components/CreateAnnouncement';

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
      <div>
      <div>
      <img src={JPLogo} alt="Juice Press Logo" width="20%" height="20%"></img>
      <nav id='nav1'>
        <button>Profile</button>
        <button>Slack</button>
        {/* <button onClick={()=> setRender(true)}>Create Announcement</button>
        {hasRender && <CreateAnnouncement/>} */}
        <button>Google Workspace</button>
        <button>Blanket Pro</button>
      </nav>

      <div id='container2'>
        <h2>Important Announcements</h2>
       </div>

    <div id='conatiner3'>
      <button>Help</button>
      <button>Sign Out</button>
      </div>
    </div>
      </div>

    </div>

  )
}

