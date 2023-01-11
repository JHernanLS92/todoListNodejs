const  TodosServices = require('../services/todos.services');


const getAllTodos = async (req, res) => {
    try {
        const result = await TodosServices.getAllTodos();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TodosServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTodoCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TodosServices.getWithCateg(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createTodos = async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await TodosServices.postTodos(newTodo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await TodosServices.updateTodo(field, { where:{id}});
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TodosServices.deleteTodo({where: {id}});
        res.status(200).json(result);   
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    getTodoCategory,
    createTodos,
    updateTodo,
    deleteTodo
};