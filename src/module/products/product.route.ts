import express from 'express';
import productController from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:productId', productController.getSpecificProductById);
router.put('/:productId', productController.updateSpecificProductById);
router.delete('/:productId', productController.deleteSpecificProductById);

const productRouter = router;
export default productRouter;
