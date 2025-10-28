import models from '../models/models.js';

const {OrderItem} = models;

export const getAllOrderItems = async(req, res) => {
    try {const getOrderItems = await OrderItem.findAll(); // SELECT * FORM ORDERITEMS
        res.status(200).json(getOrderItems)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const getOneOrderItem = async(req, res) => {
    try {
        const {id} = req.params;
        const getOrderItemById = await OrderItem.findOne({where:{id}})
        if (!getOrderItemById) return res.status(404).json({message: 'Корзина не найдена'})
        res.status(200).json(getOrderItemById)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const createOrderItem = async(req, res) => {
    try {
        const {price, count} = req.body;
        const newOrderItem = await Order.create({price, count});
        res.status(201).json(newOrderItem)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const deleteOneOrderItem = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteOrderItemById = await OrderItem.destroy({where:{id}})
        if (!deleteOrderItemById) return res.status(404).json({message: 'Корзина не найдена'})
        res.status(200).json({message: 'Заказ удалён'})}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};