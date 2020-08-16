import { buscarHeroeAsync } from "./Promesas";
const heroesIds = ['capi','iron','hulk'];

export const obtenerHeroesArr = () =>{
    
    const heroesArr = [];
    for( id of  heroesIds){
        buscarHeroeAsync(id).then( heroe => heroesArr.push(heroe) );
    }

    return heroesArr;
}