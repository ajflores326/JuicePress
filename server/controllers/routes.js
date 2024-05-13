import { Router } from "express";
import Announcement from "../models/announcements.js";

const router = Router();

router.get("/", (request,response) => {
    response.send("Server connected")
})

router.post("/createannouncement", async (request, response) => {
//TODO: validationMiddleware
    
    const announcement = new Announcement({
        title: request.body.room,
        user: request.body.user,
        body: request.body.body
        
    })

    await announcement.save();

    response.send("Announcement posted")

})


export default router;