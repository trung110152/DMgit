import {Router} from "express";
import homeController from "../controller/HomeController";
import {router} from "./router";

export const postRouter = Router();
postRouter.get('/create', homeController.showFormCreate);
postRouter.post('/create', homeController.create);
postRouter.get('/edit/:id', homeController.showFormEdit);
postRouter.post('/edit/:id', homeController.edit);
postRouter.get('/remove/:id', homeController.showFormRemove);
postRouter.get('/removePost/:id', homeController.remove);
postRouter.get('/myPosts', homeController.showMyPosts);