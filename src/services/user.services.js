const Users = require('../models/users.model');
const Todos = require('../models/todos.models');

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw new error;
        }
    }
    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw new error;         
        }
    }
    static async getWithTasks(id){
        try {
            const result = await Users.findOne({
                where:{ id },
                attributes: ["username","email"],
                include: {
                    model: Todos,
                    attributes: ["title", "description"],
                    as: "task"
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getCategories(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw  error;
        }
    }
    static async create(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw new error;         
        }
    }
    static async update(id,field){
        try {
            const result = await Users.update(id, field);
            return result;
        } catch (error) {
            throw  error;    
        }
    }
    static async destroy(id){
        try {
            const result = await Users.destroy(id);
            return result;
        } catch (error) {
            throw new error;    
        }
    }
}

module.exports = UserServices;