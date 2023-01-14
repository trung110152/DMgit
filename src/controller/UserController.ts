import {Request, Response} from "express";
import userService from "../service/UserService";

class HomeController {
    private userService;

    constructor() {

        this.userService = userService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        await userService.getAll();
        res.render('users/login')
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);
        if (user) {
            // @ts-ignore
            req.session.User = user;
            res.redirect('/posts/myPosts')
        } else {
            res.redirect('/users/login')
        }
    }

}

export default new HomeController();