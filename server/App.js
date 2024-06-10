import express, { response } from 'express';
import "dotenv/config";
import router from "./controllers/routes.js";
import userRouter from "./controllers/routes-user.js";
import adminRouter from "./controllers/routes-admin.js";
import mongoose from "mongoose";
import cors from "cors";
import axios from 'axios';
import path from "path";
import { fileURLToPath } from "url";

// define __dirname in ES modules
//  __filename is a URL, which it is in ES modules
const __filename = fileURLToPath(import.meta.url);
// gets the directory name of the current module file
const __dirname = path.dirname(__filename);

//---->MO
// import { PrismaClient } from
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import dotenv from dotenv
//--->MO

// import serverless from 'serverless-http';
// import { access } from 'fs';
// import { request } from 'http';
// import { Prisma } from '@prisma/client';

// import { PutObjectCommand } from '@aws-sdk/client-s3';--->MO
// dotenv.config()--->MO

//gives access to env variables as JS variables---->MO
// const bucketName = process.env.BUCKET_NAME
// const bucketRegion = process.env.BUCKET_REGION
// const accessKey = process.env.ACCESS_KEY
// const secretAccessKey = process.env.SECRET_ACCESS_KEY

//creating new s3 object
// const s3 = new S3Client({

//     credentials: {
//         accessKeyId: accessKey,
//         secretAccessKey: secretAccessKey,
//     },
//     region: bucketRegion
// });---->MO


// Slack configuration
const token = process.env.SLACK_BOT_TOKEN;
const channelId = process.env.SLACK_CHANNEL_ID;

let userIdToUserMap = {}; // Added Slack configuration

// Slack function to fetch user map
const fetchUserMap = async () => {
  try {
    const response = await axios.get('https://slack.com/api/users.list', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data && response.data.ok) {
      userIdToUserMap = response.data.members.reduce((map, user) => {
        map[user.id] = { name: user.real_name, avatar: user.profile.image_72 };
        return map;
      }, {});
    } else {
      console.error('Error fetching users: Response data not in expected format', response.data);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUserMap(); // Fetch user map initially

const app = express();
// const prisma = new PrismaClient()----MO

// const storage = multer.memoryStorage()---->MO
// const upload = multer({ storage: storage})---->MO

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//storing file by sending to s3 bucket--->MO
// app.post("/api/posts", upload.single(""), async (req, res) => {
//     console.log("req.body", req.body)
//     console.log("req.file", req.file)

//     req.file.buffer

//     const params = {
//         Bucket: bucketName,
//         Key: req.file.originalname,
//         Body: req.file.buffer,
//         ContentType: req.file.mimetype

//     }
//     const command = new PutObjectCommand(params)

//     await s3.send(command)

//storing post data into database ex: caption, pic 
// const post = await prisma.posts.create({
//     data: {
//         caption: req.body.caption,
//         imageName: imageName
//     }
// })

//     res.send({})
// })---->MO

// app.use("/createannouncement", announcementRouter)

// export const handler = serverless(app)

// Slack routes
app.get('/messages', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.history', {
      params: { channel: channelId },
      headers: { Authorization: `Bearer ${token}` },
    });

    const messagesWithUsers = response.data.messages.map((message) => ({
      ...message,
      user: userIdToUserMap[message.user]?.name || message.user,
      avatar: userIdToUserMap[message.user]?.avatar || 'default_avatar_url',
    }));

    res.json({ messages: messagesWithUsers });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/channel-info', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.info', {
      params: { channel: channelId },
      headers: { Authorization: `Bearer ${token}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching channel info:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/channel-users', async (req, res) => {
  try {
    const response = await axios.get('https://slack.com/api/conversations.members', {
      params: { channel: channelId },
      headers: { Authorization: `Bearer ${token}` },
    });

    const users = await Promise.all(
      response.data.members.map(async (user) => {
        const userInfo = await axios.get('https://slack.com/api/users.info', {
          params: { user },
          headers: { Authorization: `Bearer ${token}` },
        });
        return {
          id: userInfo.data.user.id,
          name: userInfo.data.user.real_name,
          avatar: userInfo.data.user.profile.image_72,
        };
      })
    );
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is now listening on port ${process.env.SERVER_PORT}`)
})

mongoose.connect(process.env.ATLAS_CONNECTION)
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to database")
});
db.on("error", (err) => {
  console.log(err)
})
