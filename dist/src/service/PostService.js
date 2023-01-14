"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../model/post");
class PostService {
    constructor() {
        this.getAll = async () => {
            let posts = await post_1.Post.find().populate('user');
            return posts;
        };
        this.findMyPosts = async (user) => {
            let posts = await post_1.Post.find({ user: user }).populate('user');
            return posts;
        };
        this.save = async (post) => {
            return post_1.Post.create(post);
        };
        this.update = async (id, newPost) => {
            let post = await post_1.Post.findOne({ _id: id });
            if (!post) {
                return null;
            }
            return post_1.Post.updateOne({ _id: id }, newPost);
        };
        this.findById = async (id) => {
            let post = await post_1.Post.findOne({ _id: id });
            if (!post) {
                return null;
            }
            return post;
        };
        this.remove = async (id) => {
            let post = await post_1.Post.findOne({ _id: id });
            if (!post) {
                return null;
            }
            return post_1.Post.deleteOne({ _id: id });
        };
        this.findByName = async (search) => {
            let posts = await post_1.Post.find({ title: { $regex: `(.*)${search.search}(.*)` } });
            if (!posts) {
                return null;
            }
            return posts;
        };
    }
}
exports.default = new PostService();
//# sourceMappingURL=PostService.js.map