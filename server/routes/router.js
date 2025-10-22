import {Router} from 'express';
import clientRouter from './clientRouter.js';
import orderItemRouter from './orderItemRouter.js';
import orderRouter from './orderRouter.js';
import productRouter from './productRouter.js';

const router = Router();

router.use('/clients', clientRouter)
router.use('/orderItems', orderItemRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)

export default router;