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
        // console.log(user);
        if (user.password === 'lock') {
            // @ts-ignore
            req.session.User = user;
            res.redirect('/home')
        } else {
            res.redirect('/users/login')
        }
    }

    logout = async (req: Request, res: Response) => {
        // @ts-ignore
        req.session.destroy((err)=>{
           return  res.redirect('/users/login')
        })

    }

    showUsers = async (req: Request, res: Response) => {
        // @ts-ignore
        let user = req.session.User
        // console.log(user);
        if (user.username === 'TrungCV'){
            let users = await userService.getAll();
            res.render('users/showUsers', {users: users})
        } else {
            res.redirect('/home')
        }
    }

    lockUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        // console.log(id);
        await this.userService.update(id);
        res.redirect(301,'/users/showUsers')
    }

}

export default new HomeController();