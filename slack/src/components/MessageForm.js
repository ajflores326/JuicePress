import React, { useState } from 'react';
import './MessageForm.css'; 

const MessageForm = ({ sendMessage }) => { // Defining the MessageForm component and destructuring the sendMessage prop
  const [message, setMessage] = useState(''); // Defining state for the message input

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    sendMessage(message); // Calling the sendMessage function passed as a prop with the message
    setMessage(''); // Clearing the message input after sending
  };

  return (
    <form onSubmit={handleSubmit} className="message-form"> {/* Form element with an onSubmit event handler */}
      <input
        type="text" // Input type is text
        value={message} // Binding the input value to the message state
        onChange={(e) => setMessage(e.target.value)} // Updating the message state when the input value changes
        placeholder="Type your message here" // Placeholder text for the input
        className="message-input" // CSS class for styling the input
      />
      <button type="submit" className="send-button">Send</button> {/* Submit button with a CSS class for styling */}
    </form>
  );
};

export default MessageForm; 