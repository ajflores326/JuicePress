import { Router } from "express";
import Announcement from "../models/announcements.js";
import validationMiddleware from "../middleware/validationMiddleware.js";
import userValidationMiddleware from "../middleware/validationMiddleware.js";
import User from "../models/user.js"

const router = Router();

//displays all announcements on homepage
router.get("/", async (request,response) => {
    try {
        const allAnnouncements = await Announcement.find({});
        response.send(allAnnouncements)
    } catch (err) {
        response.status(500).send({
            message: err.message
        })
    }
})

//creates an announcement
router.post("/createannouncement", async (request, response) => {
    try {
        const announcement = new Announcement({
            announcementTitle: request.body.announcementTitle,
            announcementContent: request.body.announcementContent
        });
        await announcement.save();
        response.send({
            message: "Announcement was successfully posted."
        })
    } catch (err) {
        response.status(500).send({
            message: error.message
        });
    }
});

//verify user token 
router.post("/", validationMiddleware, (req, res) => {
    res.send('Validation middleware successful');
});


export default router;