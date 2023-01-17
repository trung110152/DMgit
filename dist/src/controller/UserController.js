"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class HomeController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await UserService_1.default.getAll();
            res.render('users/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user.password === 'lock') {
                req.session.User = user;
                res.redirect('/home');
            }
            else {
                res.redirect('/users/login');
            }
        };
        this.logout = async (req, res) => {
            req.session.destroy((err) => {
                return res.redirect('/users/login');
            });
        };
        this.showUsers = async (req, res) => {
            let user = req.session.User;
            if (user.username === 'TrungCV') {
                let users = await UserService_1.default.getAll();
                res.render('users/showUsers', { users: users });
            }
            else {
                res.redirect('/home');
            }
        };
        this.lockUser = async (req, res) => {
            let id = req.params.id;
            await this.userService.update(id);
            res.redirect(301, '/users/showUsers');
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=UserController.js.map