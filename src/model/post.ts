import {model, Schema} from "mongoose";
import {IUser} from "./user";
export interface IPost {
    title?: string;
    content?: string;
    time?: string;
    image?: string;
    user?: IUser;
}

const PostSchema = new Schema<IPost>({
    title: String,
    content: String,
    time: String,
    image: String,
    user:{
        type: String,
        ref:'User'
    }
})
const Post = model<IPost>('Post', PostSchema);
export {Post};