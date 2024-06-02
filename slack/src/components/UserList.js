import React from 'react'; 
import './UserList.css'; 

const UserList = ({ users }) => { // Defining the UserList component and destructuring the users prop
  if (!users || users.length === 0) { // Checking if there are no users
    return <div>No users found</div>; // Returning a message if no users are found
  }

  const workspace = "your-workspace"; // Defining the workspace name for Slack links

  return (
    <div>
      <h2>Users</h2> 
      <ul className="user-list"> {/* Unordered list for displaying users */}
        {users.map((user) => ( // Mapping over the users array to create list items
          <li key={user.id} className="user-list-item"> {/* Each list item has a unique key and a CSS class */}
            <img
              src={user.avatar} // User's avatar image source
              alt={`${user.name}'s avatar`} // Alternative text for the image
              className="user-avatar" // CSS class for styling the image
              onError={(e) => { e.target.src = 'default_avatar_url'; }} // Fallback image source if loading fails
            />
            <a
              href={`https://${workspace}.slack.com/team/${user.id}`} // Link to the user's Slack profile
              target="_blank" // Opening the link in a new tab
              rel="noopener noreferrer" // Preventing security vulnerabilities
              className="user-name-link" // CSS class for styling the link
            >
              <span className="user-name">{user.name}</span> {/* Displaying the user's name */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; 
