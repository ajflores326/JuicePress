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
    }
});

export default model("Announcement", announcementSchema);
