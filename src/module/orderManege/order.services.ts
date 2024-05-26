import { Order } from './order.model';
import { TOrder } from './order.type';
import { zodOrderValidationSchema } from './order.zod.validation';

// create product into db
const createOrderIntoDB = async (orderData: TOrder) => {
  const validateData = zodOrderValidationSchema.parse(orderData);
  const result = await Order.create(validateData);
  return result;
};

// get product from db
const getOrdersFromDB = async (email: string) => {
  let result: TOrder[];
  if (email) {
    result = await Order.find({ email });
  } else {
    result = await Order.find();
  }

  return result;
};

export default {
  createOrderIntoDB,
  getOrdersFromDB
};
