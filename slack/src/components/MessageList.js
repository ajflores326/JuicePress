import React from 'react'; 
import Message from './Message';
import './MessageList.css'; 

const MessageList = ({ messages }) => { // Defining the MessageList component and destructuring the messages prop
  return (
    <div>
      {messages
        .sort((a, b) => a.ts - b.ts) // Sorting messages by timestamp to ensure they are in chronological order
        .map((message, index) => ( // Mapping over the sorted messages array to create message components
          <Message key={index} message={message} /> // Rendering the Message component with a unique key and message prop
        ))}
    </div>
  );
};

export default MessageList; 