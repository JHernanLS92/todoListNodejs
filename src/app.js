//importar express
const express = require('express');
// importar based e datos
const db = require('./utils/database');
// crear una instancia de express
const app = express();
const initModels = require('./models/initModel');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.routes');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
//probando la conexion de la base de datos
db.authenticate()
    .then( () => console.log('Autenticacion exitosa'))
    .catch( (error) => console.log(error));
//Ejecutamos la funcion  de inicio de modelos
initModels();
//syncronizar la db
db.sync({force: false}) //devuelve una promesa, recibe los cambios en el objeto para actualizar las tabalas
    .then( () => console.log('Base de datos sincronizada'))
    .catch( (error) => console.log(error));
    
app.use("/api/v1", userRoutes);
app.use("/api/v1", todosRoutes);
app.use('/api/v1', authRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
