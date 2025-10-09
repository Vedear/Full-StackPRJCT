import {Sequelize} from 'sequelize'

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,		// общие данные, ниже идут уникальные
	process.env.DB_PASSWORD, 
    {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT
})

export default sequelize;