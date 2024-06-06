import React from 'react';
import './styles/Slack.css'; 
const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <img src={message.avatar} alt="Avatar" className="avatar" />
          <div className="message-content">
            <strong className="message-user">{message.user}</strong>
            <p className="message-text">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
