import { Router } from "express";
import Announcement from "../models/announcements";

const router = Router();

router.get("/", (request,response) => {
    response.send("Server connected")
})

router.post("/createannouncement", validationMiddleware, async (request, response) => {

    
    const announcement = new Announcement({
        title: request.body.room,
        user: request.body.user,
        title: request.body.title,
        body: request.body.body
        
    })

    await announcement.save();

    response.send("Announcement posted")

})


export default router;