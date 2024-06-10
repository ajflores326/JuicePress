// Message.jsx
import React from 'react';
import './styles/Message.css';

const Message = ({ message }) => {
  return (
    <div className="message">
      <p>{message.content}</p>
      <p>{message.user}</p>
    </div>
  );
};

export default Message;
