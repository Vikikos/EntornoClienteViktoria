let nombreNav = localStorage.getItem('nombre');
if(nombreNav){
    //si ya existe sustituye el formulario con el texto
    document.getElementById('res').textContent = 'Bienvenido ' + nombreNav;
    //boton para eliminar
    document.getElementById('borrarVar').addEventListener('click',()=>{
        localStorage.removeItem('nombre');
        location.reload();
    })
}else{
    //si no existe le da la funcion al boton de crear la variable local
    let boton = document.getElementById('botonGuardar');
    boton.addEventListener('click',()=>{
        let userName = document.getElementById('name').value;
        console.log(userName);
        localStorage.setItem('nombre',userName);
    });
}


