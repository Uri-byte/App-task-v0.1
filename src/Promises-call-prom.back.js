import {buscarHeroe as buscarHeroeCallback} from './callBacks';
import{buscarHeroe} from './Promesas';
//Una vez deficina la funcion callback se debe hacer referencia al objeto almacenandolo
/**Se crea referencia a las llamadas de objetos desde instancias guardadas en las variables */
const heroeid1 = 'capi'; //Regresa undefine cuando el id no se encuentra en la base de datos
const heroeid2 = 'iron';
//Permite buscar en una base de datos.
/*buscarHeroe(heroeid1,(err, heroe1)=>{
    if(err){ return console.log(err);}
    /**Estar en el mismo scope de la funcion por tanto ya existe un llamado a la instacia heroe,
     * OH usa el heroe anterior, quedar a concecuencia del navegador o simplemente ser usado por el interprete. 
     */
  /*  buscarHeroe(heroeid2, (err, heroe2) =>{
        if (err){
            console.err(err);
        }
        console.log(`Enviando a${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    } );
    /**Conforme se van haciendo llamadas para esperar respuestas por callbacks se empiezan a anidar y anidar.
     * SE LE CONOCE COMO CALL BACK HALL
     */
/*})*/

//Utilizando esta forma estariamos anidando una promesa tras otra(Promise-Hell),
/*buscarHeroe(heroeid1).then( heroe=>{
    console.log(`hero ${heroe.nombre} al esapcio `);
});*/

//Forma simple de mandar los elementos llamados por promesas
//Se puede emplear la destruccturacion de arreglos para aceder a los elementos, si indice.
/**No importa cual de las promesas tarde mas en responder, estara en la posicion del arreglo.
 * Y usando la destructuracion se puede acceder de forma mas limpia a los datos enviados por el promise.
 * 
*/
Promise.all( [buscarHeroe(heroeid1), buscarHeroe(heroeid2)] ).then(( [heroe1, heroe2] ) =>{
    console.log(`Enviando a la mision a ${heroe1.nombre} y ${heroe2.nombre}`);
    //Esta sentencia se ejecuta si la promesa no falla
})

.catch( err =>{
    //Captura el error y se ejecuta una vez que la promesa falla
    alert(err)
})

.finally( ()=>{
    //Una vez cumplida la promesa se ejecuta para hacer cualquier accion
    console.log('Final')
})