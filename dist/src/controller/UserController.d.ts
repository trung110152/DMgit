import { Request, Response } from "express";
declare class HomeController {
    private userService;
    constructor();
    showFormLogin: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    logout: (req: Request, res: Response) => Promise<void>;
    showUsers: (req: Request, res: Response) => Promise<void>;
    lockUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
