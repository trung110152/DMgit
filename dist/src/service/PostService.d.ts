declare class PostService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/post").IPost> & import("../model/post").IPost & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    save: (post: any) => Promise<import("mongoose").Document<unknown, any, import("../model/post").IPost> & import("../model/post").IPost & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private update;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/post").IPost> & import("../model/post").IPost & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    private remove;
}
declare const _default: PostService;
export default _default;
