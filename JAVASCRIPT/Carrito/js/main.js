//console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito');
let cursosCarrito = [];

function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");
}

function agregarCurso(evento){
    console.log("Soy el agregar curso");
    //console.log(evento.target.parentElement.parentElement);
    
   let curso = leerDatosCurso(evento.target.parentElement.parentElement);
   console.log(curso);
   cursosCarrito.push(curso);
   console.log(cursosCarrito);

   pintarCarritoHTML();
   
}

function leerDatosCurso(curso){
    console.log(curso);
    
    console.log(curso.querySelector('a').getAttribute('data-id'));
    console.log(curso.querySelector('img').src);
    console.log(curso.querySelector('h4').textContent);
    console.log(curso.querySelector('h5').textContent);
    
    const infoCurso = {
            id:curso.querySelector('a').getAttribute('data-id') ,
            imagen: curso.querySelector('img').src ,
            nombre: curso.querySelector('h4').textContent ,
            precio: curso.querySelector('h5').textContent ,
            cantidad: 1 
    }

    return infoCurso;
}

function pintarCarritoHTML(){
    //Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = ""

    cursosCarrito.map( (curso) => { 

        //Crear una fila
        let fila = document.createElement('tr');

        //Asignar los valores en celdas
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
    })
}
pintarCarritoHTML();