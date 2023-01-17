"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = __importDefault(require("../service/PostService"));
const UserService_1 = __importDefault(require("../service/UserService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let posts = await PostService_1.default.getAll();
            res.render('home', { posts: posts });
        };
        this.showFormCreate = async (req, res) => {
            let user = req.session.User;
            res.render('posts/create', { users: user });
        };
        this.create = async (req, res) => {
            let post = req.body;
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name);
                post.image = '/storage/' + image.name;
                await PostService_1.default.save(post);
                res.redirect(301, '/home');
            }
        };
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let post = await this.postService.findById(id);
            res.render('posts/edit', { post: post });
        };
        this.edit = async (req, res) => {
            let post = req.body;
            let id = req.params.id;
            let image = req.files.image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name);
                post.image = '/storage/' + image.name;
                await this.postService.update(id, post);
                res.redirect(301, '/home');
            }
        };
        this.showFormRemove = async (req, res) => {
            let id = req.params.id;
            res.render('posts/remove', { id: id });
        };
        this.adminFormRemove = async (req, res) => {
            let id = req.params.id;
            let user = req.session.User;
            if (user.username === "TrungCV") {
                await this.postService.remove(id);
                res.redirect(301, '/home');
            }
            else {
                res.redirect(301, '/home');
            }
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await this.postService.remove(id);
            res.redirect(301, '/posts/myPosts');
        };
        this.findPost = async (req, res) => {
            let posts = await this.postService.findByName(req.body);
            res.render('home', { posts: posts });
        };
        this.showMyPosts = async (req, res) => {
            let user = req.session.User;
            let posts = await PostService_1.default.findMyPosts(user);
            res.render('posts/myPosts', { posts: posts });
        };
        this.postService = PostService_1.default;
        this.userService = UserService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map