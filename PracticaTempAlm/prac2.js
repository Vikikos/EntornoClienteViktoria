let precio = 100;
let cambioPrecio = setInterval(() => {
    //random 1 o 0
    let aleatorio = Math.floor(Math.random()*2)+1;
    console.log(aleatorio);
    if(aleatorio == 1){
        // es 1 baja
        precio -= 5;
    }else{
        //es 2 sube
        precio +=5;
    }
    if(precio>=120){
        texto = '¡Máximo alcanzado!';
        clearlnterval(cambioPrecio);
    }else if(precio <= 80){
        texto = '¡Mínimo alcanzado!';
        clearlnterval(cambioPrecio);
    }else{
        texto = precio;
    }
    document.getElementById('res').textContent = texto;
}, 1000);