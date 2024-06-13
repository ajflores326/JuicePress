
import React from 'react';
import { useState, useEffect } from 'react';
import user from '../../../server/models/user';
import admin from '../../../server/models/admin';
import { useNavigate } from "react-router-dom";
import juice from '../images/GreenJuice.jpg';
import profile from '../images/Profile.png';
import JPLogo from '../images/JPLogo.png';
import SignOut from './SignOut';

export default function Profile() {
    const [token, setToken] = useState(localStorage.getItem("jwt-tokenAdmin"));
    const [user, setUser] = useState("")
    const [admin, setAdmin] = useState("")
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [employeeID, setEmployeeID] = useState("");
    // const [email, setEmail] = useState("")
    // const [updatePassword, setUpdatePassword] = useState("")
    // const [position, setPosition] = useState("")
    // const [storeLocation, setStoreLocation] = useState("")
    const navigate = useNavigate()

    function navigateBack() {
        navigate('/home')
    }

    function navigateSlack() {
        navigate('/slack');
      }    

    async function getUsername() {

        //using fetch to obtain user last name and first name from database
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}user/username`, {
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
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}admin/adminUsername`, {
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

    //submitForm Function
    // async function submitForm(event){
    //     event.preventDefault();
    //     const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/profile`, {
    //         method: "POST",
    //         headers: {
    //           "content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             firstName,
    //             lastName,
    //             employeeID,       
    //             email,      
                // updatePassword,
    //             position,
    //             storeLocation
    //         })
    //       });
      
    //       if (response.status === 200) {
    //         const body = await response.json();
    //         navigate('/profile')
    //        return body;
    //       } else {
    //         navigate('/profile')
    //         alert("Looks like something went wrong. Please try again.")
    //       }
    // }


    return (
        <div>

            {/* profile header title */}
            <div className='flex justify-center text-4xl mt-7'>
                <h1 className='block font-bold'>Profile</h1>
            </div>

            {/* navigation bar */}
            <div className="content relative">
                <nav className='flex flex-col nav1 font-semibold bg-accent py-96 space-y-12' style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)' }}>

                    <div className='flex-row'>
                        <img src={JPLogo} style={{ position: 'fixed', left: 14, top: '25%', transform: 'translateY(-50%)' }} alt="Juice Press Logo" width="85%" height="85%"></img>
                    </div>

                    <button onClick={() => navigateBack()} className='block btn rounded-full bg-primary hover:bg-secondary outline outline-offset-1 outline-black w-36 mx-14'>Home</button>
                    <button onClick={() => navigateSlack()} className='block btn rounded-full bg-primary hover:bg-secondary outline outline-offset-1 outline-black w-36 mx-14'>Slack</button>
                    <SignOut></SignOut>
                </nav>
            </div>

            {/* profile pic box with general info */}
            <div className='flex flex-row justify-center ml-52 mt-9'>

                <div className='flex flex-col border-1 rounded-lg shadow-lg shadow-gray-400 h-full px-6'>
                    <div className="avatar">
                        <div className="w-32 rounded-full ml-36 mt-5">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <div className='flex flex-col'>

                        <div className='flex justify-center py-7'>
                            <label className='font-semibold text-2xl'>Name:</label>
                            {token ?
                                <h1 className='text-2xl'>{admin.firstName} {admin.lastName}</h1>
                                : <h1 className='text-2xl'>{user.firstName} {user.lastName}</h1>}

                        </div>

                        <div className='flex justify-center'>
                            <label className='font-semibold text-2xl'>Position:</label>
                            {token ?
                            <h1 className='block text-2xl'>Store Manager</h1>
                            : <h1 className='text-2xl'>Front End</h1>}
                        </div>

                        <div className='flex justify-center p-7'>
                            <label className='font-semibold text-2xl'>Location:</label>
                            <h1 className='block text-2xl'>New York, New York City</h1>
                        </div>

                    </div>
                </div>
                {/* back button */}
                {/* <button className='flex justify-left p-5 m-10 py-4 btn rounded-full bg-primary hover:bg-secondary' onClick={() => navigateBack()}> BACK </button> */}
     

                {/* add a password update field */}
                {/* profile input box */}
                <div>

                    <form className='flex flex-col order-1 rounded-lg shadow-lg shadow-gray-400 m-5 pt-7 h-full' onSubmit={submitForm}>

                        <label className='font-semibold mx-6'>First name:</label>
                        {token ?
                            <input className='block border-2 rounded-lg border-gray-400 mx-6 pr-64' placeholder={admin.firstName} type="text" onChange={(e) => setFirstName(e.target.placeholder)}/>
                            : <input className='block border-2 rounded-lg border-gray-400 mx-6 pr-64' placeholder={user.firstName} type="text" onChange={(e) => setFirstName(e.target.placeholder)} />}

                        <label className='font-semibold mx-6'>Last name:</label>
                        {token ?
                            <input className='block border-2 rounded-lg border-gray-400 mx-6 pr-64' placeholder={admin.lastName} type="text" onChange={(e) => setLastName(e.target.placeholder)} />
                            : <input className='block border-2 rounded-lg border-gray-400 mx-6' placeholder={user.lastName} type="text" onChange={(e) => setLastName(e.target.placeholder)} />}


                        <label className='font-semibold mx-6'>Empolyee ID:</label>
                        {token ?
                            <input className='block border-2 rounded-lg border-gray-400 mx-6 pr-64' placeholder={admin.employeeID} onChange={(e) => setEmployeeID(e.target.placeholder)}></input>
                            : <input className='block border-2 rounded-lg border-gray-400 mx-6' placeholder={user.employeeID} onChange={(e) => setEmployeeID(e.target.placeholder)}></input>}

                        {token ?
                        <label className='font-semibold mx-6'>Email:</label>
                        : null}

                        {token ?
                        <input className='block border-2 rounded-lg border-gray-400 mx-6 pr-64' placeholder={admin.email} onChange={(e) => setEmail(e.target.placeholder)}></input>
                        : null}

                        {/* <label className='font-semibold mx-6'>Update Password:</label>
                        <input className='block border-2 rounded-lg border-gray-400 mx-6' onChange={(e) => setUpdatePassword(e.target.placeholder)}></input> */}

                        <label className='font-semibold mx-6'>Position:</label>
                        <input className='block border-2 rounded-lg border-gray-400 mx-6' onChange={(e) => setPosition(e.target.placeholder)}></input>

                        <label className='font-semibold mx-6'>Store Location:</label>
                        <input className='block border-2 rounded-lg border-gray-400 mx-6' onChange={(e) => setStoreLocation(e.target.placeholder)}></input>

                        <button className='btn rounded-full bg-accent hover:bg-primary mt-4 w-24 ml-48' type='submit'>Submit</button>
                    </form>

                </div>

            </div>

        </div>


    )
}