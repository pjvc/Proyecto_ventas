
//Creacion de los usuarios 
let usuarios = [
    {
    usuario_admin: "peter_vera_15",
    password_admin: "1234",
    usuario_bodega: "peter_bodega",
    password_bodega: "bodega",
    usuario_vendedor: "peter_venta",
    password_vendedor: "venta"

    },
]
let form = document.getElementById("signup");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let usuario = document.getElementById("usuario").value;
    console.log(usuario)
    let password = document.getElementById("password").value;
    console.log(password)

    for (let index = 0; index < usuarios.length; index++) {
        const elemento = usuarios[index];
        if(usuario == elemento.usuario_admin && password == elemento.password_admin){
            window.location.assign("..//Usuarios/Admin.html");
            break;
        }
        else if(usuario == elemento.usuario_bodega && password == elemento.password_bodega){
            window.location.assign("..//Usuarios/bodegueroPage.html")
            break;
        }
        else if(usuario == elemento.usuario_vendedor && password == elemento.password_vendedor){
            window.location.assign("..//Usuarios/Ventas.html")
            break;
        } 
        
            
        
    }

});
