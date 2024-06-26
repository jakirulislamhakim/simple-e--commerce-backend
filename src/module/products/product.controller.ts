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
    const searchTerm = req.query.searchTerm as string;
    const data = await productServices.getProductsFromDB(searchTerm);

    if (!data.length) {
      return res.status(404).json({
        success: false,
        message: 'Products not found into db!',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
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

// get specific products
const updateSpecificProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;
    const data = await productServices.updateSpecificProductByIdFromDB(
      productId,
      updatedProduct
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

// delete specific products
const deleteSpecificProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data =
      await productServices.deleteSpecificProductByIdFromDB(productId);

    if (data) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null
      });
    } else {
      res.status(404).json({
        success: false,
        message: "This products is not available .So you can't delete this"
      });
    }
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
  getSpecificProductById,
  updateSpecificProductById,
  deleteSpecificProductById
};
