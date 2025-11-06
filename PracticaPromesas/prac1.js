//1
function procesarPago(producto){
    return new Promise((resolver,rechazar)=>{
        setTimeout(() => {
            if(producto){
                resolver('Pago procesado correctamente para ' + producto);
            }else{
                rechazar('No se puede procesar el pago sin producto');
            }
        }, 1500);
    });
}
function enviarPedido(direccion){
    return new Promise((resolver,rechazar)=>{
        if(direccion){
            setTimeout(() => {
                let aleatorioError = Math.floor(Math.random()*100);
                if(aleatorioError<=20){
                    //20% de error
                    rechazar(Error('Error durante el envío, intente de nuevo.'));
                }else{
                    //no hay error
                    resolver('Pedido enviado correctamente a ' + direccion);
                }
            }, 2500);
        }else{
            rechazar('Dirección de envío no válida');
        }
    });
}
let p = document.getElementById('res');
let boton = document.getElementById('buyButton');

boton.addEventListener('click', () => {
    p.textContent = '';
    let producto = document.getElementById('nameProduct').value;
    let direccion = document.getElementById('direction').value;

    //console.log(producto)
    procesarPago(producto).then((res)=>{
        p.innerHTML = res;
        enviarPedido(direccion).then((res2)=>{
            p.innerHTML += '<br>' + res2;
        }).catch((error)=>{
            p.innerHTML += '<br>' + error;
        })
    }).catch((error)=>{
        p.textContent = error;
    })
});