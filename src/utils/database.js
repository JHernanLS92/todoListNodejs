const { Sequelize } = require('sequelize');

//crear una instancia con parametros de configuracion de nuestra base de datos 
const db = new Sequelize({
    //un objeto de configuracion --> credenciales de la base de datos
    database : "todoapp",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "root",
    dialect: "postgres" //definde la base de datos que estamos uasndo 
});
module.exports = db;