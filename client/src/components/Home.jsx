import React from 'react';
import './styles/Home.css';
import JPLogo from './images/JPLogo.png';

export default function Home() {
    return (
        <div id='container'>

<img src={JPLogo} alt="Juice Press Logo" width="30%" height="30%"></img>
      <nav id='nav1'>
        <button>Profile</button>
        <button>Slack</button>
        <button>Store Announcement</button>
        <button>Google Workspace</button>
        <button>Blanket Pro</button>
      </nav>

      <div id='container2'>
        <h2>Important Announcements</h2>
        <div className="p-3 bg-info my-2 rounded">
          <toast>
            <toastheader>
              Reactstrap
            </toastheader>
            <toastbody>
              This is a toast on a white background — check it out!
            </toastbody>
          </toast>
        </div>
        <div className="p-3 bg-warning my-2 rounded">
          <toast>
            <toastheader>
              Reactstrap
            </toastheader>
            <toastbody>
              This is a toast on a gridded background — check it out!
            </toastbody>
          </toast>
        </div>
        <div className="p-3 bg-info my-2 rounded">
          <toast>
            <toastheader>
              Reactstrap
            </toastheader>
            <toastbody>
              This is a toast on a primary background — check it out!
            </toastbody>
          </toast>
        </div>
      </div>

    <div id='conatiner3'>
      <button>Help</button>
      <button>Sign Out</button>
      </div>

    </div>
    )
}