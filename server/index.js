import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';
import models from './models/models.js';
import cors from 'cors';

const app = express()
const PORT = process.env.PORT
const {Client} = models

app.use(cors());
app.use(express.json()); // функция парсит json, то есть жрёт так, как он есть

app.get('/api/clients', async(req, res) => {
	try {const getClients = await Client.findAll();
		res.status(200).json(getClients)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
});

app.listen(PORT, () => {
    console.log(`сервер запущен на порту ${PORT}`
)})

const Start = async () => { // если Node.js видит async то она понимает, что функция будет асинхронной
	try {
		await sequelize.authenticate()
		await sequelize.sync( )
		app.listen(PORT, () => {
   		console.log(`сервер запущен на порту ${PORT}`
)})
		console.log('Успешное подключение к БД')
}	catch(error){ // это отрабатывается, если не выполнится try
		console.error('Не удалось подключиться к БД', error)
}}

Start();