// instancia para la conceccion de db
const db = require('../utils/database');
// tipos de datos de sequelize 
const {DataTypes} = require('sequelize');
// Nombre del modelo va con la inicial mayuscula despues va el nombre de la tabla en min
const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { // validaciones que queremos que haga la db
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Users;