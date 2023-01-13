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
        let posts = await postService.getAll();
        res.render('home', {posts: posts})
    }

    showFormCreate = async (req: Request, res: Response) => {
        let users = await this.userService.getAll()
        console.log(users)
        res.render('posts/create', {users: users});
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
        await this.postService.remove(id);
        res.render('posts/remove', {id: id});
    }
    remove = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.postService.remove(id);
        res.redirect(301, '/home');
    }

}

export default new HomeController();