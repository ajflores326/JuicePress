import jwt from "jsonwebtoken";
import User from "../models/user.js";

export default async function validationMiddleware(request, response, next) {
    try {
        // Decrypting JWT
        const decryptedToken = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);

        // Getting user from ID that was in JWT
        const user = await User.findById(decryptedToken.id);

        // Checking if user exists
        if (!user) {
            throw new Error("User not found");
        }

        // Attaching user object to the request 
        request.user = user;

        return next();
    } catch (error) {
        // Error handler
        return response.status(401).json({ error: "Unauthorized" });
    }
}
