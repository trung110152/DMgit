import {Request, Response} from "express";
import postService from "../service/PostService";
import userService from "../service/UserService";

class HomeController {
    private postService;
    private userService;

    constructor() {
        this.postService = postService;
        this.userService = userService;
    }

    showHome = async (req: Request, res: Response) => {
        // @ts-ignore
        // let user = req.session.User
        // console.log(user)
        let posts = await postService.getAll();
        res.render('home', {posts: posts})
    }

    showFormCreate = async (req: Request, res: Response) => {
        // @ts-ignore
        let user = req.session.User  // lấy session của user vừa login
        // console.log(user)
        res.render('posts/create', {users: user});
    }
    create = async (req: Request, res: Response) => {
        let post = req.body;
        let image = req.files.image;
        if ("mv" in image) {
            await image.mv('./public/storage/' + image.name);
            post.image = '/storage/' + image.name;
            await postService.save(post);
            res.redirect(301, '/home');
        }
    }


    showFormEdit = async (req: Request, res: Response) => {
        let id = req.params.id
        // console.log(id)
        let post = await this.postService.findById(id);
        res.render('posts/edit', {post: post});
    }

    edit = async (req: Request, res: Response) => {
        let post = req.body;
        let id = req.params.id
        let image = req.files.image;
        if ("mv" in image) {
            await image.mv('./public/storage/' + image.name);
            post.image = '/storage/' + image.name;
            await this.postService.update(id, post);
            res.redirect(301, '/home');
        }
    }

    showFormRemove = async (req: Request, res: Response) => {
        let id = req.params.id
        res.render('posts/remove', {id: id});
    }

    adminFormRemove = async (req: Request, res: Response) => {
        let id = req.params.id;
        // @ts-ignore
        let user = req.session.User;
        // console.log(user)
        if(user.username === "TrungCV"){
            await this.postService.remove(id);
            // res.render('posts/remove', {id: id});
            res.redirect(301, '/home');
        } else {
            res.redirect(301, '/home');
        }

    }

    // adminRemove = async (req: Request, res: Response) => {
    //     let id = req.params.id
    //     await this.postService.remove(id);
    //     res.redirect(301, '/home');
    // }

    remove = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.postService.remove(id);
        res.redirect(301, '/posts/myPosts');
    }

    findPost =async (req: Request, res: Response) => {
       let posts = await this.postService.findByName(req.body);
        res.render('home', {posts: posts})
    }

    showMyPosts =async (req: Request, res: Response) => {
        // @ts-ignore
        let user = req.session.User;
        // console.log(user)
        let posts = await postService.findMyPosts(user);
        res.render('posts/myPosts', {posts: posts})
}

}

export default new HomeController();