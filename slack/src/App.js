import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import MessageList from './components/MessageList';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]); // State to store the list of messages
  const [channelInfo, setChannelInfo] = useState(null); // State to store information about the channel
  const [users, setUsers] = useState([]); // State to store the list of users in the channel
  const [error, setError] = useState(null); // State to store any errors that occur

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchMessages();
    fetchChannelInfo();
    fetchUsers();
  }, []);

  // Function to fetch messages from the server
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5001/messages'); // Making a GET request to fetch messages
      setMessages(response.data.messages); // Updating the state with the fetched messages
    } catch (error) {
      console.error('Error fetching messages:', error); // Logging any errors that occur
      setError('Error fetching messages'); // Setting the error state
    }
  };

  // Function to fetch channel information from the server
  const fetchChannelInfo = async () => {
    try {
      const response = await axios.get('http://localhost:5001/channel-info'); // Making a GET request to fetch channel info
      setChannelInfo(response.data.channel); // Updating the state with the fetched channel info
    } catch (error) {
      console.error('Error fetching channel info:', error); // Logging any errors that occur
      setError('Error fetching channel info'); // Setting the error state
    }
  };

  // Function to fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5001/channel-users'); // Making a GET request to fetch users
      setUsers(response.data.users); // Updating the state with the fetched users
    } catch (error) {
      console.error('Error fetching users:', error); // Logging any errors that occur
      setError('Error fetching users'); // Setting the error state
    }
  };

  return (
    <div className="app"> 
      {error && <p className="error">{error}</p>} {/* Displaying error message if any */}
      <div className="sidebar"> {/* Sidebar container */}
        <div className="channel-name"> {/* Channel name section */}
          {channelInfo ? channelInfo.name : 'Loading channel...'} {/* Displaying channel name or loading message */}
        </div>
        <div className="user-list-section"> {/* User list section */}
          <UserList users={users} /> {/* Rendering the UserList component with users as props */}
        </div>
      </div>
      <div className="chat-container"> {/* Chat container */}
        <div className="message-section"> {/* Message section */}
          <MessageList messages={messages} /> {/* Rendering the MessageList component with messages as props */}
        </div>
      </div>
    </div>
  );
};

export default App; // Exporting the App component as the default export
