import express from 'express';
import productController from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:productId', productController.getSpecificProductById);

const productRouter = router;
export default productRouter;
