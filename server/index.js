import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`сервер запущен на порту ${PORT}`
)})

const Start = async () => { // если Node.js видит async то она понимает, что функция будет асинхронной
	try {
		await sequelize.authenticate()
		app.listen(PORT, () => {
   		console.log(`сервер запущен на порту ${PORT}`
)})
		console.log('Успешное подключение к БД')
}	catch(error){ // это отрабатывается, если не выполнится try
		console.error('Не удалось подключиться к БД', error)
}}

Start();