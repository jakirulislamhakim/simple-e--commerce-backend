import { Product } from './product.model';
import { TProduct } from './product.type';

// create product
const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
// get all products
const getProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get specific  product by id
const getSpecificProductByIdFromDB = async (_id: string) => {
  const result = await Product.findById({ _id });
  return result;
};

export default {
  createProductIntoDB,
  getProductsFromDB,
  getSpecificProductByIdFromDB
};
