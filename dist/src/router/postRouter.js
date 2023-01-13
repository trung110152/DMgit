"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.postRouter = (0, express_1.Router)();
exports.postRouter.get('/create', HomeController_1.default.showFormCreate);
exports.postRouter.post('/create', HomeController_1.default.create);
exports.postRouter.get('/edit/:id', HomeController_1.default.showFormEdit);
exports.postRouter.post('/edit/:id', HomeController_1.default.edit);
exports.postRouter.get('/remove/:id', HomeController_1.default.showFormRemove);
exports.postRouter.get('/removePost/:id', HomeController_1.default.remove);
//# sourceMappingURL=postRouter.js.map