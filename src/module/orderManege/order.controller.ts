import { Request, Response } from "express";
import orderServices from "./order.services";

// create orders data 
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const data = await orderServices.createOrderIntoDB(orderData);

        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

// get orders data 
const getOrders = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;

        const data = await orderServices.getOrdersFromDB(email);

        res.status(201).json({
            success: true,
            message: email ?
                `Orders fetched successfully for user ${email}!` :
                "Orders fetched successfully!",
            data
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}



export default {
    createOrder,
    getOrders
}