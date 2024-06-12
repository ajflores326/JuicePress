import express from "express";
// // import { createPresignedPost } from "../utils/s3.js";
// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import config from "../config/index.js";
const AWS = require('aws-sdk');
const s3Router = express.Router();
const app = express.Router();

AWS.config.update({
  accessKeyId: 'AKIAYS2NV5RVGMFAKB6A',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const s3 = new AWS.S3();

const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  }
});

app.post('/upload', upload.single('file'), (req, res) => {
  const params = {
    Bucket: 'juicepress1',
    Key: req.file.originalname,
    Body: req.file.buffer,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error uploading file');
    }

    res.send('File uploaded successfully');
  });
});
// const s3 = new S3Client({
//   region: config.AWS.Region,
//   credentials: {
//     accessKeyId: config.AWS.AccessKeyId,
//     secretAccessKey: config.AWS.AWSSecretKey,
//   },
// });
// const BUCKET_NAME = config.AWS.BucketName;
// async function createPresignedPost({ key, contentType }) {
//   const command = new PutObjectCommand({
//     Bucket: BUCKET_NAME,
//     Key: key,
//     ContentType: contentType,
//   });
//   const fileLink = `https://${BUCKET_NAME}.s3.${config.AWS.Region}.amazonaws.com/${key}`;
//   const signedUrl = await getSignedUrl(s3, command, {
//     expiresIn: 5 * 60, // 5 minutes - default is 15 mins
//   });
//   return { fileLink, signedUrl };
// }

// s3Router.post("/signed_url", async (req, res) => {
//   try {
//     console.log("hello")
//     let { key, content_type } = req.body;
//     key = "public/" + key;
//     console.log(key)
//     const data = await createPresignedPost({ key, contentType: content_type });
//     return res.send({
//       status: "success",
//       data,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({
//       status: "error",
//       message: err.message,
//     });
//   }
// });

// export default s3Router;

