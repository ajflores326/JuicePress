import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignOut() {
    // Get the history object
    // const history = useHistory(); 
    const navigate = useNavigate();

    // // Define the handleClick function to navigate to a new route
    // const handleSignOut = () => {
    //     // history.push('/login'); // Navigates to login page after signing out
    //     localStorage.removeItem('jwt-token')
    //     navigate('/login')
    // };

   
    return (
        // <button onClick={handleSignOut}>
        //     Sign Out
        // </button>
        <div>
        <button onClick={() => { 
        localStorage.removeItem("jwt-token")
        localStorage.removeItem("jwt-tokenAdmin")
        navigate('/')
        }} className='btn bg-primary rounded-full hover:bg-secondary px-20 outline outline-offset-1 outline-black'> Sign Out </button>
        </div>
    );
};

export default SignOut;

// https://tinyurl.com/26yqr9vk
