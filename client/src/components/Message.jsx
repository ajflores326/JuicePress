import PropTypes from 'prop-types';

const Message = ({ message }) => {
  const { user, text, timestamp, avatar } = message;

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date)) {
      console.error('Invalid date format:', timestamp);
      return 'Invalid date';
    }
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

Message.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
