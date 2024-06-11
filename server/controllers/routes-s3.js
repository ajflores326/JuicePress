import express from "express";
import { createPresignedPost } from "../utils/s3.js";

const s3Router = express.Router();
s3Router.post("/signed_url", async (req, res) => {
  try {
    console.log("hello")
    let { key, content_type } = req.body;
    key = "public/" + key;
    console.log(key)
    const data = await createPresignedPost({ key, contentType: content_type });
    console.log(data)
    return res.send({
      status: "success",
      data,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      status: "error",
      message: err.message,
    });
  }
});
export default s3Router;