import {Router} from 'express';
import {getAllProducts, getOneProduct, createProduct, deleteOneProduct} from '../controllers/productController.js';

const router = Router();

router.get('/', getAllProducts)
router.get('/:id', getOneProduct)
router.post('/' , createProduct)
router.delete('/:id', deleteOneProduct)

/*
router.patch('/:id', updateProduct)
router.put('/:id', addToProduct)
*/

export default router;
