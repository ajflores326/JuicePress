import express, { response } from 'express';
import "dotenv/config";
import router from "./controllers/routes.js";
import userRouter from "./controllers/routes-user.js";
import adminRouter from "./controllers/routes-admin.js";
import mongoose from "mongoose";
import cors from "cors";

//---->MO
// import { PrismaClient } from
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import dotenv from dotenv
//--->MO

// import serverless from 'serverless-http';
import { access } from 'fs';
import { request } from 'http';
import { Prisma } from '@prisma/client';

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


const app = express();
// const prisma = new PrismaClient()----MO

// const storage = multer.memoryStorage()---->MO
// const upload = multer({ storage: storage})---->MO

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/user", userRouter)
app.use("/admin", adminRouter)


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