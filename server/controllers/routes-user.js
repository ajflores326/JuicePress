import { Router, request } from "express";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

//checks to see if user exists and if not adds new user to database
router.post("/signup", async (request, response) => {
    try {
        //checking if user exists in database
        const UserExists = await User.exists({
            username: request.body.username
        })

        //user does not exist in database, create new user
        if (UserExists === null) {

            //created variable for hashing password
            const hashedPassword = await bcryptjs.hash(request.body.password, 10);

            const user = new User({
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                username: request.body.username,
                password: hashedPassword,
                email: request.body.email

            });
            
            //save new user to database
            await user.save();

            //allowing user to access chat server
            const token = jwt.sign({ id: user._id },
                process.env.SECRET_KEY);

            response.send({
                message: "User Successfully added!",
                token,
                user
            });
        } else {
            response.send("User already taken!");
        }
    } catch (error) {
        response.send(error.message);
    }
});


// log user in and verify token
router.post("/signin", async (request, response) => {
  try {
    const user = await User.findOne({ 
        username: request.body.username
     });

    if (user && await bcryptjs.compare(request.body.password, user.hashedPassword) ) {
      // User not found
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      response.send({
        message: "Success",
        token
      });
    } else {
        response.status(401).send({
        message: "Invalid username or password"
     })
    }
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
});


export default router;