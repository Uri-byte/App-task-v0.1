//import {promesaLenta,promesaMedia,promesaRapida} from './Promise.race'; 
//import {buscaHeroe, buscarHeroeAsync, buscarHeroe} from './Promesas';
import {obtenerHeroesArr} from './Await';
//promesaLenta.then( console.log)//promesaMedia.then( console.log)
//romesaRapida.then( console.log)
/**Promes.race es un metodo que nos permite obtener el valor o mensaje de todas las promesas y obtener el que se resuelve mas rapido de ellas.  
 * Si una de las promesas da un error javascript va hacer que la promesa sea ignorada osea la que da el error. 
*/
//Promise.race([promesaLenta,promesaMedia,promesaRapida])
//.then(console.log)
//.catch(console.warn)
//buscarHeroe('capi ').then(console.log).catch(console.warn);

//buscarHeroeAsync('iron2').then(console.log).catch(console.warn);

const heroes1 = obtenerHeroesArr();

console.log(heroes1)