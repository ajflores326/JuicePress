import React, { useState } from 'react';
// import './styles/Home.css';
import JPLogo from '../images/JPLogo.png';
import CreateAnnouncement from './CreateAnnouncement';
import SignOut from './SignOut';
import Popup from 'reactjs-popup';



export default function Home() {
  // create announcements component, state management, handle creation, & rendering announcements
  const [token, setToken] = useState(localStorage.getItem("jwt-tokenAdmin"));
  const [announcements, setAnnouncements] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('')

  async function CreateAnnouncement(event) {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/createannouncement`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("jwt-token")
      },
      body: JSON.stringify({
        announcementTitle,
        announcementContent
      })
    });
    if (response.status === 200) {
      const body = await response.json();
      alert(`Your announcement has been saved`)
    } else {
      console.log(body.message)
    }
  }


  const handleCreateAnnouncement = () => {
    setShowForm(true);
  }

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      title: announcementTitle,
      content: announcementContent,
    };

    setAnnouncements([...announcements, newAnnouncement]);
    setShowForm(true);
    setAnnouncementTitle('');
    setAnnouncementContent('');
    CreateAnnouncement()
  };

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
        <div className='flex flex-col items-center announcements'>
          {announcements.map((announcement, index) => (
            <div key={index} className='m-4 btn-outline rounded-lg w-1/2'>
              <h3 className='font-bold text-xl'>{announcement.title}</h3>
              <p>{announcement.content}</p>
            </div>
          ))}
        </div>
        <div className="content relative">
          <nav className='nav1 m-16 font-semibold space-y-7'>
            <button className='block btn rounded-full bg-primary hover:bg-secondary '>Profile</button>
            <button className='block btn rounded-full bg-primary hover:bg-secondary'>Slack</button>
            <button className='block btn rounded-full bg-primary hover:bg-secondary'>Help</button>
            <SignOut />
            {token ?
              <Popup trigger={
                <a href='/createannouncement' className='btn bg-primary rounded-full hover:bg-secondary font-semibold'>Create Post</a>}>

                <form className='flex-row' onSubmit={handleAnnouncementSubmit}>

                  <input
                    className='rounded py-2 px-4 border border-black m-2'
                    placeholder='Announcement Title'
                    value={announcementTitle}
                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                    required
                  />
                  <textarea
                    className='block rounded py-2 px-4 border border-black m-2'
                    placeholder='Announcement Content'
                    value={announcementContent}
                    onChange={(e) => setAnnouncementContent(e.target.value)}
                    required
                  />
                  <button className='btn bg-primary rounded-full px-9 py-3 hover:bg-secondary font-semibold' type='submit'>Submit</button>
                </form>
              </Popup>
              : ""}
          </nav>

          

        </div>
      </div>

    </div>

  );
}



