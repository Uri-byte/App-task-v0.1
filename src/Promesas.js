/**Las promesas son exatamente iguales a como son las promesas en la vida real, 
 * Una promesa es un acuerdo entre dos partes atraves de la cual una de ellas se compromete a 
 * realizar algo ante el cumplimiento de una condicion o el vencimiento de un plazo. 
 */

const heroes = {
    capi:{
        nombre:'Capitan america',
        poder:'Fuerza',
    },
    iron:{
        nombre:'Toni stark',
        poder:'inteligencia',
    },
    hulk:{
        nombre:'bruce',
        poder:'demoler',
    },
}

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];
/**
 * Dentro de la promesa se resive un callback(Funcion que se desea ejecutar)
 * Las promesas resiven 2 argumentos que ambos opcionales
 * Uno cuando se resive todo correctamente y otro cuando se persive un error.
 * Esos dos argumentos son fuciones llamadas resolve, reject.
 * resolve es cuando resive la promesa y reject es cuando falla. 
*/
    return new Promise( (resolve, reject)=>{
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el tipo de id ${id}`)
        }
    });
}

/**Async transforma la funcion a una funcion asincrona estamos retornando una nueva funcion 
 * Lo que hace es Tomar una funcion y su retorno en lugar de que sea en este caso el objeto propiamente en este caso el Hero
 * lo que hace es retornar una nueva promesa que resulve el valor que se tenga en el return. 
 * Usar Throw Error hace que al lanzar el error sea mas amplio y detallado. 
*/

export const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];
    
        if(heroe){
            return(heroe);
        }else{
            throw `No existe un heroe con el tipo de id ${id}`;
        }
   
}