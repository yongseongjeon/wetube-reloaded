import express from "express";
import { edit, login, logout, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("login", login);
userRouter.get("logout", logout);

export default userRouter;
