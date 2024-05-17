import { Schema, model } from "mongoose";

const announcementSchema = new Schema({
    when: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    }
});

export default model("Announcement", announcementSchema);
