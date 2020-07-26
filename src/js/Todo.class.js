
import moment from 'moment';

export class Todo{

    static fromJson({id, tarea, comp, creado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.comp = comp;
        tempTodo.creado = creado;

        return tempTodo
    }

    constructor(tarea){
        this.tarea=tarea;
        this.id = new Date().getTime();
        this.comp= false;
        this.creado =moment();
    }
    tareas(id){
        return id.getHours();


    }
    
}