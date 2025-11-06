let boton = document.getElementById('boton');

let verificarUsuario = (nombre) =>{
    return new Promise((res,recha)=>{
        setTimeout(() => {
            if(nombre === 'admin'){
                res('Usuario verificado correctamente');
            }else{
                recha(Error('Usuario no encontrado'));
            }
        }, 1500);
    });
}
let cargarDatosUsuario = () =>{
    return new Promise((res)=>{
        setTimeout(() => {
            res('Datos del usuario cargados correctamente');
        }, 2000);
    })
    
}

boton.addEventListener('click',() =>{
    let p = document.getElementById('mensajes')
    let userNombre = document.getElementById('userName').value;
    verificarUsuario(userNombre)
        .then((respuesta)=>{
            p.innerHTML = respuesta + '<br>';
            cargarDatosUsuario().then((res)=>{
                p.innerHTML += res;
            })
        })
        .catch((error)=>{
            p.textContent = error.message;
        })
})