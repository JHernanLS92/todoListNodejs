//importar express
const express = require('express');
// importar based e datos
const db = require('./utils/database');
// crear una instancia de express
const app = express();
const initModels = require('./models/initModel');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');


app.use(express.json());
const PORT = 8000;
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

app.get('/', (req, res) => {
    // codigo de respuesta del servidor 
    res.status(200).json({ message: "Bienvenido al servidor" });
});

// defiir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios 
// localhost:8000/users ---> todo para usuarios
//localhost:8000/todos ---> todo para tareas

//GET a /users
app.get('/users', async (req, res) => {
    try{
        //vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
        const result = await Users.findAll(); // encuentra todo en la db = SELECT * FROM users;
        res.status(200).json(result);
        }
    catch(error){
        console.log(error);
    }
});
// buscando usuario por llave primaria
app.get("/users/:id", async (req, res) => {
    try {
     // console.log(req.params);
      const { id } = req.params;
      const result = await Users.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });
  // buscando por username
  app.get("/users/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });
  // creando un usuario
  app.post("/users", async (req, res) => {
    try {
      const user = req.body;
      const result = await Users.create(user);
      res.status(201).json(result);
    } catch (error) {
        res.status(400),json(error.message);
      console.log(error);
    }
  });
// actualizar un usuario, solo podemos cambiar el password
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = Users.update(field, {
            where: { id }
        });
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
    }
})  
// eliminar un usuario
app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  
  // TAREA 
  //Obtener todas las tareas
  // GET localhost:8000/todos
  app.get("/todos", async (req, res)=>{
    try {
      const result = await Todos.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  //Obtener una tarea por ID
  //GET localhost:8000/todos/:id
  app.get("/todos/:id", async (req, res)=>{
    try {
      const { id } = req.params;
      const result = await Todos.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  // Crear una nueva tarea
  //  POST localhost:8000/todos
  app.post("/todos", async (req, res) => {
    try {
      const todo = req.body;
      const result = await Todos.create(todo);
      res.status(201).json(result);
    } catch (error) {
        res.status(400),json(error.message);
      console.log(error);
    }
  });
  // Actualizar el ISCOMPLETE de la tarea
  //PUT localhost:8000/todos/:id
  app.put("/todos/:id", async (req, res)=>{
    try {
      const { id } = req.params;
      const field = req.body;
      const result = Todos.update(field, { where: { id } });
      res.status(200).json(result);
    } catch (error) {
        res.status(400),json(error.message);
      console.log(error);
    }
  });
  // DELETE localhost:8000/todos
  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todos.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
