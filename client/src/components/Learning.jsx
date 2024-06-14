import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import JPLogo from '../images/JPLogo.png';
import SignOut from './SignOut';
import DocsIcon from '../images/docIcon.png';
import ManualsIcon from '../images/manualIcon.png'
import VideoIcon from '../images/videoIcon.png';

export default function Learning() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate('/home');
    }
    function navigateProfile() {
        navigate('/profile');
    }

    function navigateSlack() {
        navigate('/slack');
    }

    return (
        <div>

            {/* header */}
            <div className='flex justify-center text-4xl mt-7 ml-56'>
                <h1 className='block font-bold'>E-Learning</h1>
            </div>


            {/* navigation bar */}
            <div className="content relative">
                <nav className='flex flex-col nav1 font-semibold bg-blush py-96 space-y-12' style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)' }}>

                    <div className='flex-row'>
                        <img src={JPLogo} style={{ position: 'fixed', left: 14, top: '25%', transform: 'translateY(-50%)' }} alt="Juice Press Logo" width="85%" height="85%"></img>
                    </div>

                    <button onClick={() => navigateBack()} className='block btn rounded-full bg-blue-magic hover:bg-clean-green outline outline-offset-1 outline-black w-36 mx-14'>Home</button>
                    <button onClick={() => navigateProfile()} className='block btn rounded-full bg-blue-magic hover:bg-clean-green outline outline-offset-1 outline-black w-36 mx-14'>Profile</button>
                    <button onClick={() => navigateSlack()} className='block btn rounded-full bg-blue-magic hover:bg-clean-green outline outline-offset-1 outline-black w-36 mx-14'>Slack</button>
                    <SignOut></SignOut>
                </nav>
            </div>

            <div>

                {/* video section */}
                <div className='flex justify-center ml-48'>
                    <img src={VideoIcon} alt="Video Icon" width="13%" height="13%"></img>
                </div>

                <div className='flex justify-center font-semibold ml-48 py-3 text-clean-green text-2xl'>
                    Videos
                </div>
            </div>

            {/* manual section */}
            <div>
                <div className='flex justify-center ml-48'>
                    <img src={ManualsIcon} alt="Manual Icon" width="12%" height="12%"></img>
                </div>

                <div className='flex justify-center font-semibold ml-48 py-3 text-blue-magic text-2xl'>
                    Training Manuals
                </div>

            {/* document section */}
             <div>
                <div className='flex justify-center ml-48 py-3'>
                    <img src={DocsIcon} alt="Document Icon" width="11%" height="11%"></img>
                </div>

                <div className='flex justify-center font-semibold ml-48 py-3 text-mango-madness text-2xl'>
                    Additional Documents
                </div>

            </div>

            </div>

        </div>
    )
}