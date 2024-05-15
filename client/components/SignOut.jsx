import React from 'react';
import { useHistory } from 'react-router-dom';

function SignOut() {
    // Get the history object
    const history = useHistory(); 

    // Define the handleClick function to navigate to a new route
    const handleSignOut = () => {
        history.push('/login'); // Navigates to login page after signing out
    };

   
    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    );
};

export default SignOut;

// https://tinyurl.com/26yqr9vk
