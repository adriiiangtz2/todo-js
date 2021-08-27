
export class Todo {

  //hace una desustructuracion
  static fromJson({ id, tarea, completado, creado }) {

      const tempTodo = new Todo( tarea );

      tempTodo.id         = id;
      tempTodo.completado = completado;
      tempTodo.creado     = creado;

      return tempTodo;
  }

  constructor( tarea ) {

      this.tarea = tarea;

      this.id         = new Date().getTime(); // 12836871263
      this.completado = false;
      this.creado     = new Date();

  }

  imprimirClase() {
      console.log(`${ this.tarea } - ${ this.id }`);
  }

}