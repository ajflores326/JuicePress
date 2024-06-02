
import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import JPLogo from '../images/JPLogo.png';
import CreateAnnouncement from './CreateAnnouncement';
import SignOut from './SignOut';
import Popup from 'reactjs-popup';
import admin from '../../../server/models/admin';
import user from "../../../server/models/user"
import { useNavigate } from "react-router-dom";




export default function Home() {
  // create announcements component, state management, handle creation, & rendering announcements
  const [token, setToken] = useState(localStorage.getItem("jwt-tokenAdmin"));
  const [announcements, setAnnouncements] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('')
  const [user, setUser] = useState("")
  const [admin, setAdmin] = useState("")
  const navigate = useNavigate();

  function navigateProfile() {
    navigate('/profile')
  }


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
    document.getElementById('my_modal_2').showModal()
    
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

  async function getUsername() {

    //using fetch to obtain user last name and first name from database
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/user/username`, {
      method: "GET",
      headers: {
        "authorization": localStorage.getItem("jwt-token")
        
      },

    });

    //getting user object
    if (response.status === 200) {
      const body = await response.json();
      setUser(body)

    } else {
      console.log("error");
    }
  }

  //once user is logged in first and last name of user will be displayed on home pg
  useEffect(() => {
    getUsername()
  }, [])

  async function getAdminUsername() {

    //using fetch to obtain user last name and first name from database
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/admin/adminUsername`, {
      method: "GET",
      headers: {
        "authorization": localStorage.getItem("jwt-tokenAdmin")
        
      },

    });

    //getting user object
    if (response.status === 200) {
      const body = await response.json();
      setAdmin(body)

    } else {
      console.log("error");
    }
  }

  //once user is logged in first and last name of user will be displayed on home pg
  useEffect(() => {
    getAdminUsername()
  }, [])



  // const [hasRender, setRender] = useState(false);

  return (
    <div>
      <div>
        <div className='flex-row px-7 m-3 py-3'>
          <img src={JPLogo} alt="Juice Press Logo" width="10%" height="10%"></img>
        </div>
        
        {token ?
        <h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider  ">Welcome "{admin.firstName} {admin.lastName}!"</h1>
        :<h1 className="flex justify-center p-5 font-bold text-2xl text-violet-600 tracking-wider ">Welcome "{user.firstName} {user.lastName}!"</h1>}
        <div className='flex justify-center text-4xl'>
          <h2 className='font-bold'>Important Announcements</h2>
        </div>

        <div className='flex flex-col items-center announcements'>
          {announcements.map((announcement, index) => (
            <div key={index} className='m-4 p-4 border border-green-300 rounded-lg w-1/2'>

              <h3 className='font-bold text-xl'>{announcement.title}</h3>
              <p>{announcement.content}</p>
            </div>
          ))}
        </div>
        <div className="content relative">
          <nav className='nav1 m-16 font-semibold space-y-7'>
            <button onClick={()=> navigateProfile()} className='block btn rounded-full bg-primary hover:bg-secondary'>Profile</button>
            <button className='block btn rounded-full bg-primary hover:bg-secondary'>Slack</button>
            <button className='block btn rounded-full bg-primary hover:bg-secondary'>Help</button>
            <SignOut></SignOut>
            {token ?
            <>
                <button className='block btn bg-primary rounded-full hover:bg-secondary' onClick={()=>document.getElementById('my_modal_2').showModal()}> Create Post </button>
                <dialog className='modal-box' id = "my_modal_2" onSubmit={handleAnnouncementSubmit}>

                  <input
                    className='rounded py-2 px-4 border border-black m-2'
                    placeholder='Announcement Title'
                    value={announcementTitle}
                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                    required
                  />
                  <textarea
                    className='rounded py-2 px-4 border border-black m-2'
                    placeholder='Announcement Content'
                    value={announcementContent}
                    onChange={(e) => setAnnouncementContent(e.target.value)}
                    required
                  />
                <form method ="dialog">
                  <button className='btn bg-primary rounded-full px-9 py-3 hover:bg-secondary font-semibold'onClick={handleAnnouncementSubmit}>Submit</button>
                    </form>
                </dialog>
              </>
              : ""}
          </nav>

          

        </div>
      </div>

    </div>

  );
}



