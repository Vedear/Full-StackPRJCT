import models from '../models/models.js';

const {Order} = models;

export const getAllOrders = async(req, res) => {
    try {const getOrders = await Order.findAll(); // SELECT * FORM ORDERS
        res.status(200).json(getOrders)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const getOneOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const getOrderById = await Order.findOne({where:{id}})
        if (!getOrderById) return res.status(404).json({message: 'Заказ не найден'})
        res.status(200).json(getOrderById)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const createOrder = async(req, res) => {
    try {
        const {total_price, status} = req.body;
        const newOrder = await Order.create({total_price, status});
        res.status(201).json(newOrder)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const deleteOneOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteOrderById = await Order.destroy({where:{id}})
        if (!deleteOrderById) return res.status(404).json({message: 'Заказ не найден'})
        res.status(200).json({message: 'Заказ удалён'})}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};