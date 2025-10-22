import {Router} from 'express';
import models from '../models/models.js';

const router = Router();
const {OrderItem} = models;

router.get('/getorderitems', async(req, res) => {
	try {const getOrderItems = await OrderItem.findAll(); // SELECT * FORM OrderItems
		res.status(200).json(getOrderItems)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
});

export default router;