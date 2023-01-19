const { Sequelize } = require('sequelize');
require('dotenv').config();
//crear una instancia con parametros de configuracion de nuestra base de datos 
const db = new Sequelize({
    //un objeto de configuracion --> credenciales de la base de datos
    database : process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres", //definde la base de datos que estamos uasndo 
    logging: false
});
module.exports = db;