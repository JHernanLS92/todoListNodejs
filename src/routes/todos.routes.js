const { Router } = require('express');
const {
    getAllTodos,
    getTodoById,
    getTodoCategory,
    createTodos,
    updateTodo,
    deleteTodo
} = require('../controllers/todos.controller');
const router = Router();

router.get('/todos', getAllTodos);
router.get('/todos/:id', getTodoById);
router.get('/todos/:id/category', getTodoCategory);
router.post('/todos', createTodos);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;