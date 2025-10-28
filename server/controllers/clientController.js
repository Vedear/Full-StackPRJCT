import models from '../models/models.js';

const {Client} = models;

export const getAllClients = async(req, res) => {
	try {const getClients = await Client.findAll(); // SELECT * FORM CLIENTS
		res.status(200).json(getClients)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
};

export const getOneClient = async(req, res) => {
	try {
        const {id} = req.params;
        const getClientById = await Client.findOne({where:{id}})
        if (!getClientById) return res.status(404).json({message: 'Пользователь не найден'})
		res.status(200).json(getClientById)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
};

export const createClient = async(req, res) => {
	try {
        const {name, number, age, rating, role} = req.body;
        const newClient = await Client.create({name, age, number, rating, role});
		res.status(201).json(newClient)}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
};

export const deleteOneClient = async(req, res) => {
	try {
        const {id} = req.params;
        const deleteClientById = await Client.destroy({where:{id}})
        if (!deleteClientById) return res.status(404).json({message: 'Пользователь не найден'})
		res.status(200).json({message: 'Пользователь удалён'})}
	catch (error) {
		res.status(500).json({message: 'Ошибка сервера при получении данных'})
	}
};

/* 
try {const getClients = return res.getAllClients}???
*/