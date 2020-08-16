//Objetos que van hacer llamados por el callback como una base de datos no relacional
const heroes = {
    capi:{
        nombre:'Capitan america',
        poder:'Fuerza',
    },
    iron:{
        nombre:'toni stark',
        poder:'inteligencia',
    },
    hulk:{
        nombre:'bruce',
        poder:'demoler',
    },
}
//El callback retorna los objetos que contiene la clase heroes
//Es un standart que siempre el primer argumento del callback sea un error
export const buscarHeroe = (id , callback)=>{
    const heroe = heroes[id];

    if(heroe){
        callback(null, heroe);
    }else{
        //Un error
        callback(`No existe un heroe con el id ${id}`);
    }
 
    /**Manera standard de como se manejan los errores en los callback */
}

