// import { saludar } from './js/componentes.js';
// import { Todo } from './classes/todo-class';
// import { TodoList } from './classes/todo-list.class';
import './styles.css';
import {Todo,TodoList} from "./classes";
import { crearTodoHtml } from './js/componentes';
// Por ende ./classes ya busca el index.js

export const todoList = new TodoList();
//para que los datos de local store se carguen en el html con la funcion crearhtml
todoList.todos.forEach(todo =>crearTodoHtml(todo) );
// se puede hacer igual de esta forma
// todoList.todos.forEach( crearTodoHtml );

//imprimir clase de todo.class
// todoList.todos[0].imprimirClase();


const tarea = new Todo('Aprender Javascript');
// const tarea2 = new Todo('Aprender Javascript');
// console.log(tarea);
// todoList.nuevoTodo(tarea);
tarea.imprimirClase();


// todoList.nuevoTodo(tarea2);
console.log(todoList);

// tarea.completado=true;
// crearTodoHtml(tarea);


//EJEMPLO LOCALSTORAGE
// todoList.todos.forEach( crearTodoHtml );

// console.log( 'todos', todoList.todos );
// localStorage.setItem('mi-key', "ABBC123aa");