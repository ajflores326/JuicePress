import React, { useState } from 'react';
import './components/styles/Home.css';
import JPLogo from './images/JPLogo.png';



function App() {


  return (
    
    <div>
      <img src={JPLogo} alt="Juice Press Logo" width="20%" height="20%"></img>
      <nav id='nav1'>
        <button>Profile</button>
        <button>Slack</button>
        <button>Create Announcement</button>
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
  )
}

export default App
