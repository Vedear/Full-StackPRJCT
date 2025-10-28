import {Router} from 'express';
import {getAllOrderItems, getOneOrderItem, createOrderItem, deleteOneOrderItem} from '../controllers/orderItemController.js';

const router = Router();

router.get('/', getAllOrderItems)
router.get('/:id', getOneOrderItem)
router.post('/' , createOrderItem)
router.delete('/:id', deleteOneOrderItem)

/*
router.patch('/:id', updateOrderItem)
router.put('/:id', addToOrderItem)
*/

export default router;