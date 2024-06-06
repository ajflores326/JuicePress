import { Schema, model } from "mongoose";

const announcementSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
  },
  announcementTitle: {
    type: String,
  },
  announcementContent: {
    type: String,
  },
  image: {
    data: Buffer,
    type: String,
  },
  video: {
    data: Buffer,
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default model("Announcement", announcementSchema);
