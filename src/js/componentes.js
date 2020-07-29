import {Todo, TodoList} from './imports.class';
import{todoList}from'../index';



//Referencias en el html
const divTodoList = document.querySelector('.todo-list');
const textoInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const btnSwitch = document.querySelector('.switch');
const dark = document.querySelector('body');
export const pendientesPuntos = document.querySelector('.todo-count');


export const crearTodoHtml = (todo) =>{
    const htmlTodo = `
            <li class="${(todo.comp)?'completed':''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.comp)?'checked':''}>
                            <textarea>${todo.tarea}</textarea>
                            <label>Creado ${todo.creado}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
                    </li>`;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div);
    
    return div.firstElementChild;
}
//resive la propiedad del evento de la tecla marcada, envia la entrada y detecta si el usuario deja en blanco el espacio o preciona enter si no hay nada
const callTextInput = (event) =>{
    if(event.keyCode === 13 && textoInput.value.length > 0){
        console.log(textoInput.value);
        const nuevoTodo = new Todo(textoInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        textoInput.value = '';
    }
}

const marcarEliminarTodoList = (event) =>{
    const nombreElemento = event.target.localName;// input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){// Click en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
             
    }else if( nombreElemento.includes('button')){//Borrar todo 

        todoList.eliminarTodo( todoId );

        divTodoList.removeChild(todoElemento.parentElement);//Elimina la referencia del html
    }
    console.log(todoList);
}

//EVENTOS DEL DOM 
textoInput.addEventListener('keyup',(event) => {
    callTextInput(event);

});

divTodoList.addEventListener('click',(event)=>{
    console.log('click');
    marcarEliminarTodoList(event);

});


//Eliminar los completados recorriendo los elementos de abajo hacia arriba. y eliminandolo del dom
btnBorrar.addEventListener('click',() =>{
    todoList.elminarCompletados();
    
    for(let i = divTodoList.children.length - 1; i >= 0; i--){

        const elemento = divTodoList.children[i];

        console.log(elemento);

        if(elemento.firstElementChild.classList.contains('completed')){
            divTodoList.removeChild(elemento); 
        }
    }
});

//Gestiona la cambios de los botones cambiando los filtros
ulFiltros.addEventListener('click',(event)=>{
    const filtros = event.target.text;
    console.log(filtros);
    if(!filtros){return;}
    const elemento = divTodoList.children;
    
    for(let i = 0;i<elemento.length;i++){
        elemento[i].firstElementChild.classList.remove('hidden');
        //console.log(elemento[i].firstElementChild);
        const completado = elemento[i].firstElementChild.classList.contains('completed');

        switch(filtros){
            case 'Pendientes':
                if(completado){
                    elemento[i].firstElementChild.classList.add('hidden');
                    
                }
            break;
            
            case 'Completados':
                if(!completado){
                    elemento[i].firstElementChild.classList.add('hidden');
                }
            break;
        }
    }
});

btnSwitch.addEventListener('click',()=>{
    btnSwitch.classList.toggle('active');
    dark.classList.toggle('dark');
});