import {Router} from "express";
import homeController from "../controller/HomeController";
import {postRouter} from "./postRouter";

export const router = Router();
router.get('/home', homeController.showHome);
router.use('/posts', postRouter);
