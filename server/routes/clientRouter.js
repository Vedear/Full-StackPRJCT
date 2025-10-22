import {Router} from 'express';
import models from '../models/models.js';

const router = Router();
const {Client} = models;

router.get('/getclients', async(req, res) => {
	try {const getClients = await Client.findAll({
		attributes : ['name', 'rating']}); // SELECT * FORM CLIENTS
		res.status(200).json(getClients)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
});

export default router;