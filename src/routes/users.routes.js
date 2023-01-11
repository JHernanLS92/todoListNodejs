const { Router } = require('express');
const { getAllUsers, getUserById, postUser, putUser, deleteUser, getUsersTasks } = require('../controllers/users.controller');

const router = Router();
/*
    un controlador es una funcion y aqui se va a almacenar 
    todos los gets sales de esta funcion 
*/
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
//obtener usuario con tareas
router.get('/users/:id/todos', getUsersTasks);

router.post('/users', postUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

module.exports = router;