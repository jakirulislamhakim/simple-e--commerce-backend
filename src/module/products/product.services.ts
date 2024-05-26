import { Product } from './product.model';
import { TProduct } from './product.type';

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

export default {
  createProductIntoDB
};
