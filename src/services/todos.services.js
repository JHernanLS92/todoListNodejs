const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');

class TodosServices{
    static async getAllTodos(){
        try {
            const result = await Todos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id){
        try {
            const result = await Todos.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getWithCateg(id){
        try {
            const result = await Todos.findOne({
                where: { id },
                include:{
                    model: Categories,
                    as:"category"
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }
    static async postTodos(todo){
        try {
            const result = await Todos.create(todo);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async updateTodo(id, field){
        try {
            const result = await Todos.update(id, field);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteTodo(id){
        try {
            const result = await Todos.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = TodosServices;