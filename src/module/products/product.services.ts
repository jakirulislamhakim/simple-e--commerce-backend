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

// update a specific product
const updateSpecificProductByIdFromDB = async (
  _id: string,
  updatedProduct: TProduct
) => {
  const result = await Product.findByIdAndUpdate(_id, updatedProduct, {
    new: true,
    runValidators: true
  });
  return result;
};

// update a specific product
const deleteSpecificProductByIdFromDB = async (_id: string) => {
  const result = await Product.findByIdAndDelete(_id, { new: true });
  return result;
};

export default {
  createProductIntoDB,
  getProductsFromDB,
  getSpecificProductByIdFromDB,
  updateSpecificProductByIdFromDB,
  deleteSpecificProductByIdFromDB
};
