const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');



const users = [
    { username: 'Hernan', email: 'hernan@gmail.com', password: '12345' },
    { username: 'Liliana', email: 'liliana@gmail.com', password: '12345' },
    { username: 'Aldo', email: 'aldo@gmail.com', password: '12345' }
];

const todos = [
    { title: 'Tarea 1', description: 'Description para la tarea 1', userId: 1 },
    { title: 'Tarea 2', description: 'Description para la tarea 2', userId: 1 },
    { title: 'Hacer las compras', userId: 2 },
    { title: 'Tarea imposible', description: 'Description para la tarea 3', userId: 3 }
];

const categories = [];

const TodosCategories = [];

db.sync({force: false})
.then( () => {
    console.log("inciando con el sembradio malicioso");
    users.forEach( (user) => Users.create(user));
    
    setTimeout( () => {
        todos.forEach( (todo) => Todos.create(todo));
    }, 100)
})
.catch( (error) => console.log(error));