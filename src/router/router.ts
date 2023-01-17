import {Router} from "express";
import homeController from "../controller/HomeController";
import {postRouter} from "./postRouter";
import {userRouter} from "./userRouter";
import userController from "../controller/UserController";

export const router = Router();
router.get('/home', homeController.showHome);
router.post('/home/adminRemove/:id', homeController.adminFormRemove);
router.post('/home', homeController.findPost);
router.use('/posts', postRouter);
router.use('/users', userRouter);
