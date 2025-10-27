let radios = document.getElementsByName('p1');
console.log(radios)
radios.forEach(radio => {
    radio.addEventListener('click',()=>{
        if(radio.value == 'saludar'){
            alert('Hola');
        }
        if(radio.value == 'crearCaja'){
            document.getElementById('res').style.backgroundColor = 'red';
        }
        if(radio.value == 'aleatorio'){
            let aleatorio = Math.floor(Math.random()*1000);
            document.getElementById('res').textContent = aleatorio;
        }
    });
});