import React from 'react';

const Message = ({ message }) => {
  const { user, text, timestamp, avatar } = message;

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="message">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="message-content">
        <div className="message-user">{user}</div>
        <div className="message-text">{text}</div>
        <div className="message-timestamp">{formatTimestamp(timestamp)}</div>
      </div>
    </div>
  );
};

export default Message;
