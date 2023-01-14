import {Router} from "express";
import homeController from "../controller/HomeController";
import {postRouter} from "./postRouter";
import {userRouter} from "./userRouter";

export const router = Router();
router.get('/home', homeController.showHome);
router.post('/home', homeController.findPost);
router.use('/posts', postRouter);
router.use('/users', userRouter);
