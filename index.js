// CREACION DE VARIABLES
var t = 1//Ya no es utilizada

let c = 2
const b = 3 //valor constante no reutilizable, TAMBIEN puedes crear funciones

//Funcion normal
function normal(){
    console.log('Puto el que lo lea');

}

normal()
//Funcion de flecha:
const a = () => {
    console.log("Hola perres")
};

//Funcion anonima
function anonima(a){
    return false;
}

//Funcion anonima de flecha
() => {}

//IMPORTANTE: llamar a la funcion.
a();

//Declarar un arreglo

const arreglo =[7, 9, 0, 1];

//imprimir el arreglo
console.log(arreglo);
//imprimir una posicion especifica del arreglo
console.log(arreglo[0])
console.log(arreglo[1])

//Crear un objeto

const objeto ={
    name: 'BMW',
    modelo: '123',
    // es posibke crear arregos +++++ arreglo: [][] 
    //Tambien puedes cerar objetos dentro de objetos
    xd: {
        name: 'Nissan'
    },//creacion de objeto dentro de un objeto
}

//Imprimir objeto
console.log(objeto)
//Imperime un atributo especifico del objeto 
console.log(objeto.modelo)

//creacion de if

 const test = 'if1'

console.log(`if1 ${test}`)

//Otra forma de crear el if
true ? false : true;

//****************************************** 

//Importar 
import { hello } from "./src/hellowWord.js";
console.clear()
console.log(hello())

/*AGEREGAR EN EL JSON : 
-Dentro de los scripts: ----> "start": "node index.js",

-Arriba del depurar: ----->   "type": "module",

*/