const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos_categories.models');



const users = [
    { username: 'Hernan', email: 'juanhernan@gmail.com', password: '12345' },
    { username: 'Liliana', email: 'liliana@gmail.com', password: '12345' },
    { username: 'Aldo', email: 'aldo@gmail.com', password: '12345' }
];

const todos = [
    { title: 'Estudiar node', description: 'Description para la tarea 1', user_id: 1 },
    { title: 'Pasear al perro', description: 'Description para la tarea 2', user_id: 1 },
    { title: 'Chequeo mensual', user_id: 2 },
    { title: 'Lavar platos', description: 'Description para la tarea 3', user_id: 3 }
];

const categories = [
    {name: 'personal'},
  {name: 'educacion'},
  {name: 'salud'},
  {name: 'trabajo'},
  {name: 'hogar'},
  {name: 'cocina'},
  {name: 'deporte'},
  {name: 'ocio'},
  {name: 'financiero'},
  {name: 'entretenimiento'}
];

const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
  ];
  


db.sync({force: false})
.then( () => {
    console.log("inciando con el sembradio malicioso");
    users.forEach( (user) => Users.create(user));
    
    setTimeout( () => {
        todos.forEach( (todo) => Todos.create(todo));
    }, 100);
    setTimeout( () =>{
        categories.forEach((category) => Categories.create(category));
    },200);
    setTimeout( () =>{
        todosCategories.forEach((tc) => TodosCategories.create(tc));
    },300);
})
.catch( (error) => console.log(error));