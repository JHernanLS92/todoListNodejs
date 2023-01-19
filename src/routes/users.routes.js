const { Router } = require('express');
const { getAllUsers, getUserById, postUser, putUser, deleteUser, getUsersTasks, getUserCategories } = require('../controllers/users.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = Router();
/*
    un controlador es una funcion y aqui se va a almacenar 
    todos los gets sales de esta funcion 
*/
router.get('/users', authMiddleware, getAllUsers);
router.get('/users/:id', authMiddleware, getUserById);
//obtener usuario con tareas
router.get('/users/:id/todos', authMiddleware, getUsersTasks);

router.post('/users', postUser);
router.put('/users/:id', authMiddleware, putUser);
router.delete('/users/:id', deleteUser);

router.get('/users/categories', authMiddleware, getUserCategories);

module.exports = router;