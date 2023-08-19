//creacion de tabla de usuarios
const div_listas = document.createElement('div')
const table_usuarios = document.createElement('table')
const tr_cabecera = document.createElement('tr')
const th_botones_1 = document.createElement('th')
const th_botones_2 = document.createElement('th')
const th_botones_3 = document.createElement('th')
const th_usuario = document.createElement('th')
const th_contraseña = document.createElement('th')
const th_rol = document.createElement('th')
const tabla_body = document.createElement('tbody')
const th_peter = document.createElement('th')
const th_vera = document.createElement('th')
const th_vendedor = document.createElement('th')

//creacion de tablas de vendedor
const div_listas_vendedor = document.createElement('div')
const table_vendedor = document.createElement('table')
const tr_cabecera_vendedor = document.createElement('tr')
const th_cliente = document.createElement('th')
const th_producto = document.createElement('th')
const th_cantidad = document.createElement('th')

//creacion de tablas de bodeguero
const div_listas_bodega = document.createElement('div')
const table_bodega = document.createElement('table')
const tr_cabecera_bodega = document.createElement('tr')
const th_bodega_producto = document.createElement('th')
const th_bodega_cantidad = document.createElement('th')
const th_bodega_precio = document.createElement('th')



//creacion del segmento para insertar clientes
let div_container_clientes = document.createElement('div')
let div_contenido_clientes = document.createElement('div')
let label_cliente = document.createElement('label')
let label_producto_cliente = document.createElement('label')
let label_cliente_cantidad = document.createElement('label')
let input_cliente = document.createElement('input')
let input_cliente_producto= document.createElement('input')
let input_cliente_cantidad = document.createElement('input')

//creacion del segmento para insertar productos a la bodega
let div_container_bodega = document.createElement('div')
let div_contenido_bodega = document.createElement('div')
let label_bodega_producto = document.createElement('label')
let label_bodega_precio = document.createElement('label')
let label_bodega_cantidad = document.createElement('label')
let input_bodega_producto = document.createElement('input')
let input_bodega_precio = document.createElement('input') 
let input_bodega_cantidad = document.createElement('input')

//creacion del segmeto de nosotros
const div_listas_nosotros = document.createElement('div')
let div_container_nosotros = document.createElement('div')
let div_boton_nosotros = document.createElement('div')

let div_nosotros = document.createElement('div')
let div_imagen_nosotros = document.createElement('div')
let div_descripcion_nosotros = document.createElement('div')
let titulo_nosotros = document.createElement('h1')
let Segundo_titulo = document.createElement('h2')
let parrafo_titulo = document.createElement('p')
let imagen_nosotros = document.createElement('img')
let texto_nosotros = document.createElement('div')


//Colocando imagenes 
imagen_nosotros.src = '..//seets/img/seccion_nosotros.png'

//Agregando las clases a la seccion de nosotros 
div_nosotros.classList.add('div_nosotros')
div_imagen_nosotros.classList.add('div_imagen_nosotros')
div_descripcion_nosotros.classList.add('div_descripcion')
titulo_nosotros.classList.add('titulo_nosotros')
imagen_nosotros.classList.add('imagen_nosotros')
texto_nosotros.classList.add('texto_nosotros')

//Agregando los textos correspondientes a la seccion nosotros
titulo_nosotros.textContent = "Proyecto Sistema de ventas"
texto_nosotros.textContent = "Acerca de la apliacion"
Segundo_titulo.textContent = "Sistema de ventas desarrollado por el alumno Peter Jose Vera Contreras  30/7/2023"
parrafo_titulo.textContent= "Se ha realizado una aplicacion web con una interfaz que sea intuitiva para el usuario en la que tiene varias opciones por parte del administrador como crear usuarios que puedan ser tanto bodegueros como vendedores en las que tienen funciones como ingresar, editar, eliminar:  clientes, productos, cantidad del producto, precio, entre otras cosas, el administrador tiene la capacidad de hacer todas las funciones de los demas usuarios"

//Agregando los hijos correspondientes 
div_imagen_nosotros.appendChild(imagen_nosotros)
div_descripcion_nosotros.appendChild(titulo_nosotros)
div_descripcion_nosotros.appendChild(Segundo_titulo)
div_descripcion_nosotros.appendChild(texto_nosotros)
div_descripcion_nosotros.appendChild(parrafo_titulo)
div_nosotros.appendChild(div_imagen_nosotros)
div_nosotros.appendChild(div_descripcion_nosotros)

//Creacion de botones
var div_boton = document.querySelector('div.container_boton_insertar')
var button_insertar_usuarios = document.querySelector('button.boton_insertar_usuarios')
var button_insertar_clientes= document.createElement('button')
var button_insertar_bodega = document.createElement('button')

//Añadiendo clases a los botones 
button_insertar_clientes.classList.add('boton_insertar_usuarios')
button_insertar_bodega.classList.add('boton_insertar_usuarios')

//Añadiendo texto a los botones
button_insertar_clientes.textContent = "Insertar cliente"
button_insertar_bodega.textContent = "Insertar producto"


//Añadicion de clases a los elementos usuarios
div_listas.setAttribute('class', 'listas')
//Añadicion de clases a los elementos vendedor
div_listas_vendedor.setAttribute('class','listas')
//Añadicion de clases a los elementos bodega
div_listas_bodega.setAttribute('class','listas')
//Añadicion de clases a los elementos Nosotros
div_listas_nosotros.setAttribute('class', 'listas')
div_listas_nosotros.classList.add('container_nosotros')

//Añadicion de las clases al panel de insertar clientes
div_container_clientes.setAttribute('class', 'container_insertar_usuarios')
div_contenido_clientes.setAttribute('class', 'insertar_usuarios')
label_cliente.setAttribute('class', 'label_seleccionar')
label_producto_cliente.setAttribute('class', 'label_seleccionar')
label_cliente_cantidad.setAttribute('class', 'label_seleccionar')

//Agregacion de las clases al panel de insertar productos a la bodega
div_container_bodega.setAttribute('class', 'container_insertar_usuarios')
div_contenido_bodega.setAttribute('class', 'insertar_usuarios')
label_bodega_producto.setAttribute('class','label_seleccionar' )
label_bodega_precio.setAttribute('class', 'label_seleccionar')
label_bodega_cantidad.setAttribute('class', 'label_seleccionar')


//Añadicion de los atributos a insertar en la seccion clientes
input_cliente.setAttribute('type', 'text')
input_cliente_cantidad.setAttribute('type', 'text')
input_cliente_producto.setAttribute('type', 'text')

input_cliente.setAttribute('id', 'cliente')
input_cliente_producto.setAttribute('id','producto')
input_cliente_cantidad.setAttribute('id', 'cantidad')

//Añadicion de los atributos a insertar en la seccion bodega

input_bodega_producto.setAttribute('type', 'text')
input_bodega_precio.setAttribute('type', 'text')
input_bodega_cantidad.setAttribute('type', 'text')

input_bodega_producto.setAttribute('id', 'bodega_producto')
input_bodega_precio.setAttribute('id', 'bodega_precio')
input_bodega_cantidad.setAttribute('id', 'bodega_cantidad')

//Añadicion de clases a la seecion nosotros 
div_container_nosotros.classList.add('container_insertar_usuarios')
div_boton_nosotros.classList.add('container_boton_insertar')
div_nosotros.classList.add('listas')

//Agregacion de texto a los elementos usuario
th_usuario.textContent = "Usuario"
th_contraseña.textContent = "Contraseña"
th_rol.textContent= "Rol"
th_peter.textContent = "Peter"
th_vera.textContent = "Vera"
th_vendedor.textContent = "Vendedor"

//Agregacion de texto a los elementos vendedor
th_cliente.textContent = "Cliente"
th_producto.textContent = "Producto"
th_cantidad.textContent = "Cantidad de compra"

//Agregacion de texto a los elementos bodega
th_bodega_cantidad.textContent = "Cantidad"
th_bodega_producto.textContent = "Producto"
th_bodega_precio.textContent = "Precio"

//Agregacion de texto a los elementos insertar en la seccion clientes 
label_cliente.textContent = "Cliente:  "
label_producto_cliente.textContent = "Producto:  "
label_cliente_cantidad.textContent = "Cantidad:  "

//Agregacion de texto a los elementos de insertar en la seccion de bodega
label_bodega_producto.textContent= "Producto:  "
label_bodega_precio.textContent = "Precio:  "
label_bodega_cantidad.textContent = "Cantidad:  "


//Captrando el contenido principal para posteriormente cambiarlo con las funciones
const main = document.querySelector('main')

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
th_botones_1.classList.add('editar')
th_botones_2.classList.add('editar')
th_botones_3.classList.add('editar')

//Creando la estructura de los botones de editar y borrar con el metodo appenchild
th_cabezera_botones.appendChild(boton_borrar)
th_cabezera_botones.appendChild(boton_editar)
tr_cabecera.appendChild(th_botones_1)
tr_cabecera.appendChild(th_usuario)
tr_cabecera.appendChild(th_contraseña)
tr_cabecera.appendChild(th_rol)

table_usuarios.appendChild(tr_cabecera)
table_usuarios.appendChild(tabla_body)

div_listas.appendChild(table_usuarios)

main.appendChild(div_listas)

//Construccion de la tabla con appendChild vendedores
tr_cabecera_vendedor.appendChild(th_botones_2)
tr_cabecera_vendedor.appendChild(th_cliente)
tr_cabecera_vendedor.appendChild(th_producto)
tr_cabecera_vendedor.appendChild(th_cantidad)

table_vendedor.appendChild(tr_cabecera_vendedor)

div_listas_vendedor.appendChild(table_vendedor)

//Construccion de la seccion para insertar clientes
label_cliente.appendChild(input_cliente)
label_cliente_cantidad.appendChild(input_cliente_cantidad)
label_producto_cliente.appendChild(input_cliente_producto)

div_contenido_clientes.appendChild(label_cliente)
div_contenido_clientes.appendChild(label_producto_cliente)
div_contenido_clientes.appendChild(label_cliente_cantidad)

div_container_clientes.appendChild(div_contenido_clientes)

//Construccion de la seccion para insertar productos a la bodega
label_bodega_producto.appendChild(input_bodega_producto) 
label_bodega_precio.appendChild(input_bodega_precio)
label_bodega_cantidad.appendChild(input_bodega_cantidad)

div_contenido_bodega.appendChild(label_bodega_producto)
div_contenido_bodega.appendChild(label_bodega_precio)
div_contenido_bodega.appendChild(label_bodega_cantidad)

div_container_bodega.appendChild(div_contenido_bodega)

//Construccion de la tabla con appenChild bodega
tr_cabecera_bodega.appendChild(th_botones_3)
tr_cabecera_bodega.appendChild(th_bodega_producto)
tr_cabecera_bodega.appendChild(th_bodega_precio)
tr_cabecera_bodega.appendChild(th_bodega_cantidad)

table_bodega.appendChild(tr_cabecera_bodega)

div_listas_bodega.appendChild(table_bodega)

//Seleccion de iconos
const seleccionar_ventas = document.querySelector('img#seleccionar_ventas')
const seleccionar_usuarios = document.querySelector('img#seleccionar_usuarios')
const seleccionar_bodega = document.querySelector('img#seleccionar_bodega')
const seleccionar_nosotros = document.querySelector('img#seleccionar_nosotros')
var insertar_cambio_usuarios = document.querySelector('div.container_insertar_usuarios')
var cambiar_button_2 = document.querySelector('button.boton_insertar_usuarios')
//funciones para cambiar a la aplicacion de vender, almacenar en bodega o crear usuario
function cambiar_ventas(){
    var seleccionar = document.querySelector('div.listas')
    var insertar_cambio = document.querySelector('div.container_insertar_usuarios')
    var cambiar_button = document.querySelector('button.boton_insertar_usuarios')
    var quitar_boton = document.querySelector('div.container_boton_insertar')
    main.replaceChild(div_listas_vendedor,seleccionar)
    main.replaceChild(div_container_clientes, insertar_cambio)
    div_boton.replaceChild(button_insertar_clientes, cambiar_button)
    seleccionar_ventas.classList.add('select')
    seleccionar_usuarios.classList.remove('select')
    seleccionar_bodega.classList.remove('select')
    seleccionar_nosotros.classList.remove('select')
    quitar_boton.classList.remove('eliminar')

}

function cambiar_usuarios(){
    var seleccionar = document.querySelector('div.listas')
    var insertar_cambio = document.querySelector('div.container_insertar_usuarios')
    var cambiar_button = document.querySelector('button.boton_insertar_usuarios')
    var quitar_boton = document.querySelector('div.container_boton_insertar')
    main.replaceChild(div_listas, seleccionar )
    main.replaceChild(insertar_cambio_usuarios, insertar_cambio)
    div_boton.replaceChild(button_insertar_usuarios, cambiar_button)
    seleccionar_usuarios.classList.add('select')
    seleccionar_ventas.classList.remove('select')
    seleccionar_bodega.classList.remove('select')
    seleccionar_nosotros.classList.remove('select')
    quitar_boton.classList.remove('eliminar')

}
function cambiar_bodega(){
    var seleccionar = document.querySelector('div.listas')
    var insertar_cambio = document.querySelector('div.container_insertar_usuarios')
    var cambiar_button = document.querySelector('button.boton_insertar_usuarios')
    var quitar_boton = document.querySelector('div.container_boton_insertar')
    main.replaceChild(div_listas_bodega, seleccionar)
    main.replaceChild(div_container_bodega, insertar_cambio)
    div_boton.replaceChild(button_insertar_bodega, cambiar_button)
    seleccionar_bodega.classList.add('select') 
    seleccionar_nosotros.classList.remove('select')
    seleccionar_usuarios.classList.remove('select')
    seleccionar_ventas.classList.remove('select')
    quitar_boton.classList.remove('eliminar')

}
function cambiar_nosotros(){
    var quitar_insertar = document.querySelector('div.container_insertar_usuarios')
    var quitar_boton = document.querySelector('div.container_boton_insertar')
    var quitar_tabla = document.querySelector('div.listas')
    main.replaceChild(div_container_nosotros, quitar_insertar)
    main.replaceChild(div_nosotros, quitar_tabla)
    seleccionar_nosotros.classList.add('select')
    seleccionar_bodega.classList.remove('select')
    seleccionar_usuarios.classList.remove('select')
    seleccionar_ventas.classList.remove('select')
    quitar_boton.classList.add('eliminar')
    
}
//funcion cuando se da click a los iconos
seleccionar_ventas.addEventListener('click', function(){
    cambiar_ventas();
})
seleccionar_usuarios.addEventListener('click', function(){
    cambiar_usuarios();
})
seleccionar_bodega.addEventListener('click', function(){
    cambiar_bodega();
})
seleccionar_nosotros.addEventListener('click', function(){
    cambiar_nosotros();
})

//funciones para insertar en la tabla los usuarios 
function insertar_usuarios(usuario, contraseña, rol)
{
    var tr_crear_usuarios = document.createElement('tr')
    tr_crear_usuarios.appendChild(th_cabezera_botones)
    tr_crear_usuarios.innerHTML += `<th>${usuario}</th><th>${contraseña}</th><th>${rol}</th>`;
    table_usuarios.appendChild(tr_crear_usuarios)
}

button_insertar_usuarios.addEventListener('click', (event)=>{
    let crear_usuario = document.getElementById('ingresar_usuario').value
    let crear_contraseña = document.getElementById('ingresar_contraseña').value
    let seleccionar_rol = document.getElementById('seleccionar_rol').value

    insertar_usuarios(crear_usuario, crear_contraseña , seleccionar_rol)

})
//Funciones para insertar en la tabla de los clientes

function insertar_clientes(cliente, producto, cantidad){
    var tr_crear_clientes = document.createElement('tr')
    tr_crear_clientes.appendChild(th_cabezera_botones)
    tr_crear_clientes.innerHTML += `<th>${cliente}</th><th>${producto}</th><th>${cantidad}</th>`;
    table_vendedor.appendChild(tr_crear_clientes)
}

button_insertar_clientes.addEventListener('click', (event)=>{
    let crear_cliente = document.getElementById('cliente').value
    let crear_producto = document.getElementById('producto').value
    let crear_cantidad = document.getElementById('cantidad').value

    insertar_clientes(crear_cliente, crear_producto, crear_cantidad)
})

function insertar_bodega(producto, precio, cantidad){
    var tr_crear_bodega = document.createElement('tr')
    tr_crear_bodega.appendChild(th_cabezera_botones)
    tr_crear_bodega.innerHTML += `<th>${producto}</th><th>${precio}</th><th>${cantidad}</th>`;
    table_bodega.appendChild(tr_crear_bodega)
}
button_insertar_bodega.addEventListener('click', (event)=>{
    let crear_producto = document.getElementById('bodega_producto').value
    let crear_precio = document.getElementById('bodega_precio').value
    let crear_cantidad = document.getElementById('bodega_cantidad').value

    insertar_bodega(crear_producto, crear_precio, crear_cantidad)
})






