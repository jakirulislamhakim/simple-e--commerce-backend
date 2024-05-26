import express from 'express';
import productController from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);

const productRouter = router;
export default productRouter;
