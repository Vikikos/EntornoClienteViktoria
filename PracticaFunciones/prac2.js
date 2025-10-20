let palabras =  pedirpalabra();

const palabrasMap = new Map();

palabras.forEach(palabra => {
    let veces = 0;
    for (const x in palabras) {
        if(palabra === palabras[x]){
            console.log(palabra);
            veces++;
        }
    }
    palabrasMap.set(palabra,veces);
});

let texto = '<ul>';
for (const [palabra,valor] of palabrasMap) {
    texto+= '<li>'+ palabra + '-'+ valor +'</li>'
}
texto += '</ul>';
let caja = document.getElementById('res');
caja.innerHTML = texto;

