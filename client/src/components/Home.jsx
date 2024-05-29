import React, { useState } from 'react';
import './styles/Home.css';
import JPLogo from '../images/JPLogo.png';
import CreateAnnouncement from './CreateAnnouncement';
import SignOut from './SignOut';
import Popup from 'reactjs-popup';



export default function Home() {
  // create announcements component, state management, handle creation, & rendering announcements

  const [announcements, setAnnouncements] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [announcementTitle,  setAnnouncementTitle] = useState('');
  const [announcementContent,  setAnnouncementContent] =  useState('')

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


  const handleCreateAnnouncement = () =>{
    setShowForm(true);
  }

  const handleAnnouncementSubmit = (e) =>{
    e.preventDefault();
    const newAnnouncement = {
      title: announcementTitle,
      content: announcementContent,
    };
    setAnnouncements([...announcements, newAnnouncement]);
    setShowForm(false);
    setAnnouncementTitle('');
    setAnnouncementContent('');
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
            <div key={index} className='m-4 p-4 border border-green-300 rounded-lg w-1/2'>
              <h3 className='font-bold text-xl'>{announcement.body}</h3>
            </div>
          ))}
        </div>



        <div className="content fixed">
          <nav className='nav1 m-5 font-semibold fixed'>
            <button className='block bg-green-300 rounded-full m-8 px-9 py-3 hover:bg-green-400'>Profile</button>
            <button className='block bg-green-300 rounded-full m-8 px-10 py-3 hover:bg-green-400'>Slack</button>
            <button className='block bg-green-300 rounded-full m-8 px-11 py-3 hover:bg-green-400'>Help</button>
            <SignOut />


{/*modal exmaple under construction*/} 
            {/* <Popup trigger={
              <button className='block bg-green-300 rounded-full m-8 px-11 py-3 hover:bg-green-400' type="button" onClick={handleCreateAnnouncement}>Create Announcement</button>}>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                    {/*header*/}
                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Create Announcement
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div> */}
                    {/*body*/}
                    {/* <div className="relative p-10 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        <textarea className='rounded py-10 px-24 border-2 border-gray-400 pl-[14px] pt-[1px] ' placeholder="Type here..."></textarea>
                      </p>
                    </div> */}
                    {/*footer*/}
                    {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-green-400 text-white active:bg-green-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-green-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        value={announcementBody}
                        onClick={handleAnnouncementSubmit}
                        required
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}

            {/* </Popup> */} 

            <Popup trigger = {
            <button className='block bg-green-300 rounded-full m-8 px-11 py-3 hover:bg-green-400' onClick={handleCreateAnnouncement}>Create Announcement</button>}>

            <form className='announcement-form' onSubmit={handleAnnouncementSubmit}>
              <input
                className='rounded py-2 px-4 border border-black m-2'
                placeholder='Announcement Title'
                value={announcementTitle}
                onChange={(e) => setAnnouncementTitle(e.target.value)}
                required
              />
              <textarea
                className='rounded py-2 px-4 border border-black m-2 '
                placeholder='Announcement Content'
                value={announcementContent}
                onChange={(e) => setAnnouncementContent(e.target.value)}
                required
              />
              <button className='bg-green-300 rounded-full px-9 py-3 hover:bg-green-400' type='submit'>Submit</button>
            </form>
        </Popup>


          </nav>
        </div>

      </div>
    </div>
  );
}