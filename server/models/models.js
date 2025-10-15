import sequelize from '../db.js';
import {DataTypes} from 'sequelize';

const Client = sequelize.define ('clients', {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DataTypes.STRING(55),
        allowNull : false
    },
    number:{
        type : DataTypes.STRING,
        allowNull : false
    },
    rating:{
        type : DataTypes.DECIMAL,
        defaultValue : 0
    },
    age:{
        type : DataTypes.DATE
    },
    role:{
        type : DataTypes.STRING,
        allowNull : false,
        dafaultValue : 'user'
    }
})

const Product = sequelize.define ('products', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DataTypes.STRING(150),
        allowNull : false
    },
    count: {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    price: {
        type : DataTypes.FLOAT,
        allowNull : false
    }

})

const Order = sequelize.define ('orders', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    total_price: {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    status: {
        type : DataTypes.STRING,
        allowNull : false
    }
})

const OrderItem = sequelize.define ('orderitems', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    count: {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    price: {
        type : DataTypes.FLOAT,
        allowNull : false
    }
})

Client.hasOne(Order)
Order.belongsTo(Client)

Product.hasOne(OrderItem)
OrderItem.belongsTo(Product)

Order.hasOne(OrderItem)
OrderItem.belongsTo(Order)

export default { Client, Product, Order, OrderItem }