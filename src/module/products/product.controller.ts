import { Request, Response } from 'express';
import productServices from './product.services';

// create a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const data = await productServices.createProductIntoDB(product);

    res.status(201).json({
      success: true,
      message: 'Products created successfully',
      data
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || 'something went wrong'
    });
  }
};

// get all products
const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await productServices.getProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || 'something went wrong'
    });
  }
};

// get specific products
const getSpecificProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = await productServices.getSpecificProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || 'something went wrong'
    });
  }
};

export default {
  createProduct,
  getProducts,
  getSpecificProductById
};
