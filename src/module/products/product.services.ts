import { Product } from './product.model';
import { TProduct } from './product.type';
import { zodProductValidationSchema } from './product.zod.validation';

// create product
const createProductIntoDB = async (product: TProduct) => {
  const validateData = zodProductValidationSchema.parse(product);
  const result = await Product.create(validateData);
  return result;
};
// get all products
const getProductsFromDB = async (searchTerm: string) => {
  let result: TProduct[];

  if (searchTerm) {
    result = await Product.find({
      $or: [
        { description: { $regex: searchTerm, $options: 'i' } },
        { name: { $regex: searchTerm, $options: 'i' } },
        { tags: { $in: [searchTerm] } }
      ]
    });
  } else {
    result = await Product.find();
  }
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
  const validateData = zodProductValidationSchema.parse(updatedProduct);
  const result = await Product.findByIdAndUpdate(_id, validateData, {
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
