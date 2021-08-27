import { Todo } from "../classes";
import { todoList } from "../index";
//referencias en el hht,l
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchorFiltros= document.querySelectorAll(".filtro")
export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
		<div class="view">
		<input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
		<label>${todo.tarea}</label>
		<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li> 
    `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  // insertar solo el primer hijo que es enste caso despues del div creado seria el li
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

//eventos
txtInput.addEventListener("keyup", (event) => {
  //13 es el num q corresponde al entes si da enter se ejecuta en consola el valor
  // && para tambien no puede ingresas datos bacios, y de enter
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    // console.log(nuevoTodo);
    // console.log(todoList);
    // insertar en el html
    crearTodoHtml(nuevoTodo);
    //borrar texto despues de dar enter
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  // console.log('click');
  //en la consola buscar target
  const nombreElemento = event.target.localName; //input,label,buttom
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");
  // console.log(todoElement);
  // console.log(todoId);
  if (nombreElemento.includes("input")) {
    // click en el check
    todoList.marcarCompletado(todoId);
    todoElement.classList.toggle("completed");
  } else if (nombreElemento.includes("button")) {
    //hay q borrar el todo
    todoList.eliminarTodo(todoId);
    //eliminar en el html
    divTodoList.removeChild(todoElement);
  }
  console.log(todoList);
});

btnBorrar.addEventListener("click", () => {
  todoList.eliminarCompletados();
  //borrar del html
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    // console.log(i);
    const elemento = divTodoList.children[i];
    // console.log(elemento);
    //eliminar del html
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);
    }
  }
});

ulFiltros.addEventListener("click", (event) => {
  // console.log(event.target.text);
  const filtro = event.target.text;
  console.log(filtro);
  if (!filtro) { return;}
   anchorFiltros.forEach(elem => elem.classList.remove("selected"));
   event.target.classList.add("selected");
  console.log(event.target);

  for(const elemento of divTodoList.children ){
    //  console.log(elemento);
    elemento.classList.remove("hidden");
    const completado = elemento.classList.contains("completed");
    
    switch(filtro){
      case "Pendientes":
        if(completado){
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        if(!completado){
          elemento.classList.add("hidden");
        }
        break;
    }
  
  }

});
