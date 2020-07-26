/**
 * Crear un arreglo, insertar la tarea por hacer dentro del arreglo
 * con la opcion que permita eliminar la tarea del arreglo y para 
 * eliminar todo se necesitara el id. 
 * Tambien se necesitara marcar completado y mandar el id, y de dependiendo del id 
 * buscar el id en todos y si esta completado marcar y si no lo esta 
 * marcar como no completado.
 * configurar boton para disparar accion que elimine todos los completados
 * como ya abra una instancia que tiene la propiedad completado en true, se barre el arreglo
 * y se borra todos los completados. (todo = true)
 */
import { Todo } from "./Todo.class";
import{pendientesPuntos} from './componentes';
export class TodoList{

    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
        this.countPendientes();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.countPendientes();
    }

    //resive el id de la tarea que desea eliminar
    eliminarTodo( id ){
        /* regresa un nuevo arreglo y lo almacena la variable
        todos sobre escribiendo el actual */
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        this.countPendientes();
   
    }

    marcarCompletado(id){

        for( const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id == id){
                todo.comp = !todo.comp;
                this.guardarLocalStorage();
                this.countPendientes();
                break;
            }
        }
    }

    elminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.comp);
        this.guardarLocalStorage();
        this.countPendientes();
        console.log(this.todos, 'This punto todo');
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }

    cargarLocalStorage(){
    
        this.todos = (localStorage.getItem('todo'))?
        JSON.parse(localStorage.getItem('todo'))
        :[];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }

    countPendientes(){
        let pendiente = 0;
        for( const pendientes of this.todos){
            if(!pendientes.comp === true){
                pendiente ++;
                pendientesPuntos.innerHTML = pendiente;
                //console.log(pendiente);
            }else{
                pendientesPuntos.innerHTML = pendiente;
            }
        }
    }
        
}
    
   
