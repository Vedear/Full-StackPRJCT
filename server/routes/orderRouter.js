import {Router} from 'express';
import {getAllOrders, getOneOrder, createOrder, deleteOneOrder} from '../controllers/orderController.js';

const router = Router();

router.get('/', getAllOrders)
router.get('/:id', getOneOrder)
router.post('/' , createOrder)
router.delete('/:id', deleteOneOrder)

/*
router.patch('/:id', updateOrder)
router.put('/:id', addToOrder)
*/

export default router;