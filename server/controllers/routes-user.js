import { Router, request } from "express";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/signup", async (request, response)=>{
  // this will check if an email is duplicated
  try {
    const doesEmailExist = await User.exists({
      email: request.body.email
    });

    if(doesEmailExist) {
      return response.status(400).json({
        message: "Email is already in use"
      });
    }

    // this hashes password
    const hashedPassword = await bcryptjs.hash(request.body.password, 10);

    // creates new user 
    const newUser = new User({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    username: request.body.username,
    password: hashedPassword,
    email: request.body.email
    });

    //saves user to database
    await newUser.save();

    //generates JWT token
    const token = jwt.sign({id: newUser._id}, process.env.SECRET_KEY);

    // if a successful response is made
    response.status(201).json({
      message: "User Created Successfully",
      token
    });
    } catch(error) {
      console.error("Error creating user:", error);
      response.status(500).json({message: "An error occurred, please try again."})
    }
});


export default router;
