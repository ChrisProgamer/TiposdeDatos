/* Ejemplo de Tipos de Datos en JavaScript */
// Tipo de dato String
var nombre = "Christian";
console.log(nombre);

/*typeof para saber el tipo de dato que almacena una variable 
Esto se da ya que las variables son dinamicas*/
nombre = 10;
console.log(typeof nombre);

// Tipo de dato Numerico
var numero = 1000;
console.log(numero);

// Tipo de dato Object
var objeto = {
    nombre : "Chris",
    apellido : "Romero", 
    telefono : "+5491150993025"
}
console.log(objeto)

//Tipo de dato Boolean (True, False)
var bandera = true;
console.log(bandera);
bandera = false 
console.log(typeof bandera)

//Tipo de dato Function
function miFunction(){}
console.log(typeof miFunction)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Las class en JavaScript tambien son function
class Persona {
    constructor(nombre, apellido){
        this.nombre = Chris;
        this.apellido = Romero;
    }
}
console.log(typeof Persona)

//Tipo undefined
var x;
console.log(typeof x)

x = undefined;
console.log(typeof x)

//null = ausencia de valor
var y = null;
console.log(typeof y);

//Los arreglos en JavaScript son object 
var autos = ['BMW','Audi','Volvo']
console.log(autos);
console.log(typeof autos);

//Una cadena vacia es un tipo de dato String
var z = '';
console.log(z);
console.log(typeof z )

