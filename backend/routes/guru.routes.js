import { Router } from "express";
import { authorize, guruOnly } from "../middleware/auth.middleware.js"; 

const guruRouter = Router();

guruRouter.get("/notifications", authorize,guruOnly);

export default guruRouter;
