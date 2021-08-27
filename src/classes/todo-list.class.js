import { Todo } from './todo.class';
export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
}

marcarCompletado(id) {
    for (const todo of this.todos) {
        console.log(id, todo.id);
        if (todo.id == id) {
            //si es falso entoces verdadero y de lo contrario si es verdadero falso , ya que completado es donde se realiza el checkbox
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
        }
    }
}
eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
}

guardarLocalStorage(){
    //convertir el this.todo de string a su dato normal que es el objeto con sus propiedades
    localStorage.setItem('todo',(JSON.stringify(this.todos))  );
}
cargarLocalStorage(){
  // if(localStorage.getItem('todo')){
  //   // convertir los todos guardados de string a forma normal objetos
  //   this.todos=JSON.parse(localStorage.getItem('todo'));
  //   console.log('cargar local', this.todos);
  //   console.log(typeof this.todos);
  // }else{
  //   this.todos=[];
  // }
  // //retornar los datos que son string, hacer desustructuracion
  // this.todos = this.todos.map(obj => Todo.fromJason(obj));
  this.todos = ( localStorage.getItem('todo') )
  ? JSON.parse( localStorage.getItem('todo') )
  : [];

this.todos = this.todos.map( obj=> Todo.fromJson(obj) );
console.log('cargar local', this.todos);
}

}
