import{Todo,TodoList} from './js/imports.class';
import './styles.css';
import './css/normalize.css';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
console.log(todoList.todos); 
const tarea = new Todo();
console.log(tarea);
//Instruccion accede a los todo list y los contruye uno por uno
todoList.todos.forEach(todo => crearTodoHtml(todo) );

console.log(typeof(todoList.todos));
//const newTodo = new Todo('Aprender javascript');

//todoList.nuevoTodo(newTodo);

//todoList.nuevoTodo(tarea);

//console.log(todoList);
//tarea.comp = true;

//crearTodoHtml(tarea);

//console.log(tarea);