import sequelize from './db.js';
import {DataTypes, DateTypes} from 'sequelize';

const Client = sequelize.define ('clients', {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DateTypes.STRING(55),
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