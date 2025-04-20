import { Router } from "express";
import authorize from "../middleware/auth.middleware.js"; 

import { getUsers, getUser, getUserProfile } from "../controllers/user.controller.js";


const userRouter = Router();
userRouter.get("/", getUsers);
userRouter.get("/:id",authorize, getUser);  
userRouter.get("/profile", authorize, getUserProfile); 
userRouter.post("/", (req, res) => res.send({ title: "CREATE all User" }));
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE User " }));
userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE User " })); 
 
export default userRouter;