//Estructuras de datos

//Datos primitivos -> string, interger , float, double, bool, null 
// UNDEFINED -> VACIO PARA EL SISTEMA
let vacio = null;
console.log(vacio);

vacio = "string re estandar";
console.log(vacio);


// Objetos
// Objetos literales
// Ejemplo: Formulario con datos de usuario
let perro = {
    //clave : valor
    nombre: "Chochan",
    edad: 4
}

let perro2 = {
    //clave : valor
    nombre: "Pepito",
    edad: 18
}

//Mostrar una caracteristica del perro
console.log(perro.nombre);

// POO -> Programacion Orientada a Objetos
// Forma de escribir el codigo -> Reutilizable

// Clases y objeto
// Clase -> Molde
// Objeto -> Instancia*  de una clase  *Creamos algo en base a 

class Persona {
    // Caracteristicas de esa clase -> Atributos/Propiedades
    // Constructor -> METODO PARA CREAR OBJETOS a traves de este molde
    constructor(nombreParam,edadParam){ 
        // this -> APUNTAMOS A ESTA CLASE 
        this.nombre = nombreParam;
        this.edad = edadParam;
    }


    // Metodos -> Funciones, cosas que hace esta clase
    correr( ){ 
        console.log("Estoy corriendo.");
        return "Estoy corriendo.";
    }
}

//Utilizar el constructor de Persona -> INSTANCIAR OBJETOS
let personita = new Persona("Jairo",27);
let personita2 = new Persona("Alejandro",20);
console.log(personita);
console.log(personita2);

// Acceder a algo de un objeto
personita.correr();


// PILARES DE POO -> OOP
// Existen para asegurarnos un codigo mas escalable, flexible y seguro
// 4 Pilares

// PILARES QUE SI SE PUEDEN UTILIZAR EN JAVASCRIPT
// Herencia -> Una clase hija de otra, copia el comportamiento del padre
// Polimorfismo -> Cambiar el comportamiento de un metodo del padre, con respecto a su hijo

//Herencia
class Programador extends Persona {
    constructor(nombreParam, edadParam, lenguajesParam){
        //Seguir usando las propiedades/caracteristicas del padre
        //super() Recibe en sus parentesis, los parametros del constructor del padre
        super(nombreParam,edadParam);

        //Caracteristicas propias de programador
        this.lenguajesProgra = lenguajesParam;
    }

    //Metodo propio de programador
    codear(){
        console.log("Estoy codeando");
        
    }

    //Polimorfismo
    // Sobreescritura de metodo
    correr(){
        //super.correr();
        console.log("No corro tan rapido, pero puedo trotar.");
    }
}



//Crear un programador
let programador = new Programador("Jairo",27,"Javascript");
console.log(programador);
programador.nombre = "Luz";
console.log(programador);
programador.correr();


//PILARES QUE NO SE PUEDEN UTILIZAR CON JAVASCRIPT
// Encapsulamiento -> LIMITAR EL ACCESO A LA INFORMACION DE UNA CLASE -> Modificadores de acceso
// Abstraccion -> Nos da herramientas o metodos para acceder a informacion encapsulada
