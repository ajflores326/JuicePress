import React from 'react'; 
import './Message.css'; 

const Message = ({ message }) => { // Defining the Message component and destructuring the message prop
  return (
    <div className="message"> {/* Container for the message with a CSS class for styling */}
      <img src={message.avatar} alt="User Avatar" className="avatar" /> {/* User avatar image with a CSS class for styling */}
      <div className="message-content"> {/* Container for the message content */}
        <span className="message-user">{message.user}</span> {/* Displaying the user's name with a CSS class for styling */}
        <span className="message-text">{message.text}</span> {/* Displaying the message text with a CSS class for styling */}
        <span className="message-timestamp">
          {new Date(message.ts * 1000).toLocaleString()} {/* Converting the timestamp to a readable date and time string */}
        </span>
      </div>
    </div>
  );
};

export default Message; 