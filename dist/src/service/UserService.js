"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.getAll = async () => {
            let users = await user_1.User.find();
            return users;
        };
        this.checkUser = async (user) => {
            let userCheck = await user_1.User.findOne({ username: user.username, password: user.password });
            if (!userCheck) {
                return null;
            }
            return userCheck;
        };
        this.update = async (id) => {
            let user = await user_1.User.findOne({ _id: id });
            if (!user) {
                return null;
            }
            if (user.password === 'lock') {
                user.password = 'unlock';
                return user_1.User.updateOne({ _id: id }, user);
            }
            else {
                user.password = 'lock';
                return user_1.User.updateOne({ _id: id }, user);
            }
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map