import {User} from "../model/user";


class UserService {
    constructor() {
    }

    getAll = async () =>{
        let users = await User.find();
        return users;
    }
}

export default new UserService();