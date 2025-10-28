import {Router} from 'express';
import models from '../models/models.js';

const router = Router();
const {Product} = models;

router.get('/getproducts', async(req, res) => {
	try {const getProducts = await Product.findAll(); // SELECT * FORM PRODUCTS
		res.status(200).json(getProducts)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
});

export default router;