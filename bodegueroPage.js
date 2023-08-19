//Creacion de tablas de editar
const th_botones = document.createElement('th')

//Creacion de botones para borrar y editar
var th_cabezera_botones = document.createElement('th')
var  boton_borrar = document.createElement('img')
var boton_editar = document.createElement('img')

//Colocacion de las imagenes 
boton_editar.src = "..//seets/img/editar.png"
boton_borrar.src = "..//seets/img/borrar.png"

//Agregacion de las clases 
th_cabezera_botones.classList.add('editar')
boton_borrar.classList.add('img_editar')
boton_editar.classList.add('img_editar')
th_botones.classList.add('editar')

//Creando la estructura con el metodo appenchild
th_cabezera_botones.appendChild(boton_borrar)
th_cabezera_botones.appendChild(boton_editar)

//Capturando las tablas

let tabla_bodega = document.querySelector('table#tabla_bodega')
let tabla_venta = document.querySelector('table#tabla_vendedor')

//Capturando los botones 

let button_insertar_productos = document.querySelector('button.boton_insertar_usuarios')
var button_cliente = document.querySelector('button#button')


//Agregacion de las funciones para agregar contenido

function insertar_bodega(producto, precio, cantidad){
    var tr_crear_bodega = document.createElement('tr')
    tr_crear_bodega.appendChild(th_cabezera_botones)
    tr_crear_bodega.innerHTML += `<th>${producto}</th><th>${precio}</th><th>${cantidad}</th>`;
    tabla_bodega.appendChild(tr_crear_bodega)
}

button_insertar_productos.addEventListener('click', (event)=>{
    let crear_producto = document.getElementById('bodega_producto').value
    let crear_precio = document.getElementById('bodega_precio').value
    let crear_cantidad = document.getElementById('bodega_cantidad').value
   


    insertar_bodega(crear_producto, crear_precio, crear_cantidad)
})


function insertar_cliente(cliente, producto, cantidad){
    var tr_crear_cliente = document.createElement('tr')
    tr_crear_cliente.appendChild(th_cabezera_botones)
    tr_crear_cliente.innerHTML += `<th>${cliente}</th><th>${producto}</th><th>${cantidad}</th>`
    tabla_venta.appendChild(tr_crear_cliente)
}



button_cliente.addEventListener('click', (event)=>{
    let crear_cliente = document.getElementById('cliente').value
    let crear_producto = document.getElementById('producto').value
    let crear_cantidad = document.getElementById('cantidad').value

    insertar_cliente(crear_cliente, crear_producto, crear_cantidad)
})