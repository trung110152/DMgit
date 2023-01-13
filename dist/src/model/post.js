"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: String,
    content: String,
    time: String,
    image: String,
    user: {
        type: String,
        ref: 'User'
    }
});
const Post = (0, mongoose_1.model)('Post', PostSchema);
exports.Post = Post;
//# sourceMappingURL=post.js.map