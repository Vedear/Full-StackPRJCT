
import {Router} from 'express';
import models from '../models/models.js';

const router = Router();
const {Order} = models;

router.get('/getorders', async(req, res) => {
	try {const getOrders = await Order.findAll(); // SELECT * FORM Order
		res.status(200).json(getOrders)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
});

export default router;