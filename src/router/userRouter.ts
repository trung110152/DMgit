import {Router} from "express";
import homeController from "../controller/HomeController";
import userController from "../controller/UserController";
import {router} from "./router";

export const userRouter = Router();
userRouter.get('/login', userController.showFormLogin);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/showUsers', userController.showUsers);
userRouter.post('/lockUser/:id', userController.lockUser);

