
let boton = document.getElementById('boton');
boton.addEventListener('click',()=>{
    Notification.requestPermission()
    .then((res)=>{
        if(res == 'granted'){
            new Notification('Hola',{
                body:'las notificaciones funcionan',
                icon: 'icon.png',
            });
        }else{
            document.getElementById('res').textContent = 'activa las not'
        }
    })
})