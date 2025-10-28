import models from '../models/models.js';

const {Product} = models;

export const getAllProducts = async(req, res) => {
    try {const getProducts = await Product.findAll(); // SELECT * FORM PPRODUCTS
        res.status(200).json(getProducts)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const getOneProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const getProductById = await Product.findOne({where:{id}})
        if (!getProductById) return res.status(404).json({message: 'Товар не найден'})
        res.status(200).json(getProductById)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const createProduct = async(req, res) => {
    try {
        const {total_price, status} = req.body;
        const newProduct = await Product.create({total_price, status});
        res.status(201).json(newProduct)}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};

export const deleteOneProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteProductById = await Product.destroy({where:{id}})
        if (!deleteProductById) return res.status(404).json({message: 'Товар не найден'})
        res.status(200).json({message: 'Заказ удалён'})}
    catch (error) {
        res.status(500).json({message: 'Ошибка сервера при получении данных'})
    }
};