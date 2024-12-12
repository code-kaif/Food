import e from "express";
import { login, register } from "../controllers/user.controler.js";

const userRouter = e.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
