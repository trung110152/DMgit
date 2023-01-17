import {User} from "../model/user";
import {Post} from "../model/post";


class UserService {
    constructor() {
    }

    getAll = async () =>{
        let users = await User.find();
        return users;
    }

    checkUser = async (user)=>{
        let userCheck = await User.findOne({username: user.username, password: user.password })
        if (!userCheck){
            return null;
        }
        return userCheck;
    }

     private update = async (id)=>{
        let user = await User.findOne({_id: id});
         // console.log(user)
        if (!user){
            return null;
        }
        if (user.password === 'lock'){
             user.password = 'unlock';
            // console.log(user)
            return  User.updateOne({_id: id}, user);
         } else {
             user.password = 'lock';
            return  User.updateOne({_id: id}, user);
         }

    }
}

export default new UserService();