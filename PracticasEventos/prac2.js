
let campos = document.getElementsByTagName('input');
let boton = document.getElementById('botonEnviar');
boton.setAttribute('disabled','');
let emailValido = false;
let passValido = false;

for (let i = 0; i < campos.length; i++) {
    campos[i].addEventListener('focus',() =>{
        let caja = 'res' + campos[i].name;
        document.getElementById(caja).textContent = '';
    })
    campos[i].addEventListener('blur',() => {
        if(campos[i].name == 'email'){
            if(!(campos[i].value).includes('@')){
                document.getElementById('resemail').textContent = 'El formato del email es incorrecto';
            }else{
                emailValido = true;
            }
        }
        if(campos[i].name == 'passwd'){
            if(campos[i].value.length < 8 || campos[i].value.length > 10){
                document.getElementById('respasswd').textContent = 'La contraseña debe tener 8 a 10 caracteres';
            }else{
                passValido = true;
            }
        }
        validacion();
    });
}
let validacion = () =>{
    if(emailValido && passValido){
        boton.style.backgroundColor = '#006106';
        boton.removeAttribute('disabled','');
    }else{
        boton.style.backgroundColor = '#787878';
        boton.setAttribute('disabled','');
    }
}
/*
[...campos].forEach(element => {
    para que funcione el foreach en HTML Collection
    lo pasamos a array.
});*/
