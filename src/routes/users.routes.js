const { Router } = require('express');
const {  getAllUsers, getUserById, postUser, putUser, deleteUser } = require('../controllers/users.controller');

const router = Router();
/*
    un controlador es una funcion y aqui se va a almacenar 
    todos los gets sales de esta funcion 
*/
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

module.exports = router;