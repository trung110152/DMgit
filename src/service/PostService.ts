import {Post} from "../model/post";


class PostService {
    constructor() {
    }

    getAll = async () =>{
        let posts = await Post.find().populate('user');
        // console.log(posts);
        return posts;
    }

    save = async (post)=>{
        return Post.create(post);
    }

    private update = async (id, newPost)=>{
        let post = await Post.findOne({_id: id});
        if (!post){
            return null;
        }
        return  Post.updateOne({_id: id}, newPost);
    }
    findById = async (id)=>{
        let post = await Post.findOne({_id: id});
        if (!post){
            return null;
        }
        return  post;
    }

    private remove = async (id)=>{
        let post = await Post.findOne({_id: id});
        if (!post){
            return null;
        }
        return   Post.deleteOne({_id:id})
    }
}

export default new PostService();