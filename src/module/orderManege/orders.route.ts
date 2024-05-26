import express from "express";
import orderController from "./order.controller";

const ordersRouter = express.Router();

ordersRouter.post('/', orderController.createOrder)
ordersRouter.get('/',orderController.getOrders)


export default ordersRouter
