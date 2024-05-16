import { Router } from "express";
import Announcement from "../models/announcements.js";
import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/", (request,response) => {
    response.send("Server connected")
})

router.post("/createannouncement", async (request, response) => {
    
    const announcement = new Announcement({
        title: request.body.title,
        body: request.body.body
        
    })

    await announcement.save();

    response.send("Announcement posted")

})

//verify user token 
router.post("/", validationMiddleware, (req, res) => {
    res.send('Validation middleware successful');
});

export default router;