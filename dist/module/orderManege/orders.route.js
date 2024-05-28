"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("./order.controller"));
const ordersRouter = express_1.default.Router();
ordersRouter.post('/', order_controller_1.default.createOrder);
ordersRouter.get('/', order_controller_1.default.getOrders);
exports.default = ordersRouter;
