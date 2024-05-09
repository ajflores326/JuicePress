import express from 'express';
import "dotenv/config";
import router from "./controllers/routes.js";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log(`Server is now listening on port ${process.env.SERVER_PORT}`)
})

mongoose.connect(process.env.ATLAS_CONNECTION)
const db = mongoose.connection;
db.on("connected", () => {
    console.log("Connected to database")
});
db.on("error", (err) => {
    console.log(err)
})