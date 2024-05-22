import React from 'react';
import './styles/Home.css';
import JPLogo from '../images/JPLogo.png';
import CreateAnnouncement from './CreateAnnouncement';

export default function Home() {

  // const [hasRender, setRender] = useState(false);

  return (
    <div>
      <div>
        <div className='flex-row px-7 m-3 py-3'>
          <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
        </div>
        <div className='flex justify-center text-4xl'>
          <h2 className='font-bold'>Important Announcements</h2>
        </div>
        <nav className='flex-col m-5 font-semibold'>
          <button className='block bg-green-300 rounded-full m-8 px-9 py-3 hover:bg-green-400'>Profile</button>
          <button className='block bg-green-300 rounded-full m-8 px-10 py-3 hover:bg-green-400'>Slack</button>
          <button className='block bg-green-300 rounded-full m-8 px-11 py-3 hover:bg-green-400'>Help</button>
          <button className='block bg-green-300 rounded-full m-8 px-8 py-3 hover:bg-green-400'>Sign Out</button>
          {/* <button> Create Announcement</button> */}
          {/* <button onClick={()=> setRender(true)}>Create Announcement</button> */}
          {/* {hasRender && <CreateAnnouncement/>} */}
          {/* <button className='block'>Google Workspace</button> */}
          {/* <button className='block'>Blanket Pro</button> */}
        </nav>

        


      </div>
    </div>

  )
}