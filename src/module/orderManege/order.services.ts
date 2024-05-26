import { Order } from "./order.model";
import { TOrder } from "./order.type";

// create product into db
const createOrderIntoDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result
}

// get product from db
const getOrdersFromDB = async (email: string) => {

    let result: TOrder[];
    if (email) {
        result = await Order.find({ email });
    }
    else {
        result = await Order.find();
    }

    return result
}


export default {
    createOrderIntoDB,
    getOrdersFromDB
} 