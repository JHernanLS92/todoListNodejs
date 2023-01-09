//Se importan todos los modelos creados
const Users = require('./users.model');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos_categories.models');

const initModels = () => {
    // se inicia cada tabla en prueba
    // Users;
    // Todos;
    // Categories;
    // TodosCategories;

    //Vamos a crear las relaciones 
    // hasOne --> tiene un
    // belongsTo --> Pertenece a 
    //hasMany --> tiene muchos

    //Relacion de uno a muchos
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'}); //Pertenece al medelo ususario
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});  // users tiene muchos todos por lo tanto la relacion es de 1 a muchos

    // Relacion mucho a muchos    
    TodosCategories.belongsTo(Todos, {as:'task', foreignKey: 'todo_id'});
    Todos.hasMany(TodosCategories, {as: 'categories', foreignKey: 'todo_id'});
    TodosCategories.belongsTo(Categories, {as: 'categories', foreignKey: 'category_id'});
    Categories.hasMany(TodosCategories, {as: 'tasks', foreignKey: 'category_id'});
}

module.exports = initModels;