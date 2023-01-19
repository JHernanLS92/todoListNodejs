const { Router } = require('express');
const {
    getAllTodos,
    getTodoById,
    getTodosWithCategories,
    createTodos,
    updateTodo,
    deleteTodo
} = require('../controllers/todos.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = Router();

router.get('/todos', authMiddleware, getAllTodos);
router.get('/todos/:id', authMiddleware, getTodoById);
router.get('/todos/:id/categories', authMiddleware, getTodosWithCategories);
router.post('/todos', authMiddleware, createTodos);
router.put('/todos/:id', authMiddleware, updateTodo);
router.delete('/todos/:id', authMiddleware, deleteTodo);

module.exports = router;