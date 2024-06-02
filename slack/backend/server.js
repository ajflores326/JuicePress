const express = require('express'); 
const axios = require('axios'); 
const cors = require('cors'); 
require('dotenv').config(); 

const app = express(); // Creating an Express application instance
const port = 5001; // Setting the port number for the server

app.use(cors()); // Enabling CORS for all routes
app.use(express.json()); // Enabling JSON body parsing for incoming requests

const token = process.env.SLACK_BOT_TOKEN; // Fetching the Slack bot token from environment variables
const channelId = process.env.SLACK_CHANNEL_ID; // Fetching the Slack channel ID from environment variables

let userIdToUserMap = {}; // Initializing an empty object to store user ID to user information mapping

// Function to fetch and map Slack user information
const fetchUserMap = async () => {
  try {
    const response = await axios.get('https://slack.com/api/users.list', {
      headers: { Authorization: `Bearer ${token}` }, // Setting the Authorization header with the bot token
    });
    userIdToUserMap = response.data.members.reduce((map, user) => {
      map[user.id] = { name: user.real_name, avatar: user.profile.image_72 }; // Mapping user ID to their real name and avatar URL
      return map;
    }, {});
  } catch (error) {
    console.error('Error fetching users:', error); // Logging any errors that occur while fetching users
  }
};

fetchUserMap(); // Fetching the user map initially

// Route handler to fetch messages from a Slack channel
app.get('/messages', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.history', {
      params: { channel: channelId }, // Setting the channel ID as a query parameter
      headers: { Authorization: `Bearer ${token}` }, // Setting the Authorization header with the bot token
    });

    const messagesWithUsers = response.data.messages.map((message) => ({
      ...message,
      user: userIdToUserMap[message.user]?.name || message.user, // Adding user name to the message object
      avatar: userIdToUserMap[message.user]?.avatar || 'default_avatar_url', // Adding user avatar to the message object
    }));

    res.json({ messages: messagesWithUsers }); // Sending the processed messages as a JSON response
  } catch (error) {
    console.error('Error fetching messages:', error); // Logging any errors that occur while fetching messages
    res.status(500).json({ error: error.message }); // Sending an error response
  }
});

// Route handler to fetch information about a Slack channel
app.get('/channel-info', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.info', {
      params: { channel: channelId }, // Setting the channel ID as a query parameter
      headers: { Authorization: `Bearer ${token}` }, // Setting the Authorization header with the bot token
    });
    res.json(response.data); // Sending the channel information as a JSON response
  } catch (error) {
    console.error('Error fetching channel info:', error); // Logging any errors that occur while fetching channel info
    res.status(500).json({ error: error.message }); // Sending an error response
  }
});

// Route handler to send a message to a Slack channel
app.post('/send-message', async (req, res) => {
  const { text } = req.body; // Extracting the message text from the request body
  try {
    const response = await axios.post(
      'https://slack.com/api/chat.postMessage',
      { channel: channelId, text }, // Setting the channel ID and message text in the request body
      { headers: { Authorization: `Bearer ${token}` } } // Setting the Authorization header with the bot token
    );
    res.json(response.data); // Sending the response data as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Sending an error response
  }
});

// Route handler to fetch users in a Slack channel
app.get('/channel-users', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.members', {
      params: { channel: channelId }, // Setting the channel ID as a query parameter
      headers: { Authorization: `Bearer ${token}` }, // Setting the Authorization header with the bot token
    });

    // Fetching detailed information for each user in the channel
    const users = await Promise.all(
      response.data.members.map(async (user) => {
        const userInfo = await axios.get('https://slack.com/api/users.info', {
          params: { user }, // Setting the user ID as a query parameter
          headers: { Authorization: `Bearer ${token}` }, // Setting the Authorization header with the bot token
        });
        return {
          id: userInfo.data.user.id,
          name: userInfo.data.user.real_name,
          avatar: userInfo.data.user.profile.image_72,
        };
      })
    );
    res.json({ users }); // Sending the user information as a JSON response
  } catch (error) {
    console.error('Error fetching users:', error); // Logging any errors that occur while fetching users
    res.status(500).json({ error: error.message }); // Sending an error response
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Starting the server and logging the URL
});
