import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';
import cors from 'cors';
import router from './routes/router.js';

const app = express()
const PORT = process.env.PORT

app.use(cors());
app.use(express.json()); // функция парсит json, то есть жрёт так, как он есть
app.use('/api', router);

const Start = async () => { // если Node.js видит async то она понимает, что функция будет асинхронной
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => {
   		console.log(`сервер запущен на порту ${PORT}`
)})
		console.log('Успешное подключение к БД')
}	catch(error){ // это отрабатывается, если не выполнится try
		console.error('Не удалось подключиться к БД', error)
}}

Start();