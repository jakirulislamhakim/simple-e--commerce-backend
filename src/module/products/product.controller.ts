import { Request, Response } from 'express';
import productServices from './product.services';

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
            message: error.message || "something went wrong",

        })
    }
};

export default {
    createProduct
};
