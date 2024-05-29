import { useState } from "react";
import adminValidationMiddleware from "../../../server/middleware/adminValidationMiddleware";

export default function CreateAnnouncement({ setToken }) {
    const [title, setAnnouncementTitle] = useState("")
    const [body, setAnnouncementBody] = useState("")

    async function submitCreateAnnouncement(event) {
        event.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/createannouncement`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: localStorage.getItem("jwt-token")
            },
            body: JSON.stringify({
                title,
                body
            })
        });
        if (response.status === 200) {
            const body = await response.json();
            console.log(`Your announcement has been saved!`)
        } else {
            const body = await response.json();
            console.log(body.message)
        }
    }

    return (
        <div>
            <form onSubmit={submitCreateAnnouncement} className="SignUp">
                <h1>Create Announcement</h1>
                <label>
                    <span>Announcement Title:</span>
                    <input placeholder="Title" onChange={(e) => setAnnouncementTitle(e.target.value)}></input>
                    <span>Body:</span>
                    <textarea placeholder="Body" onChange={(e) => setAnnouncementBody(e.target.value)}> </textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}