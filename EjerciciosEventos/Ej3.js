
let elementsP = document.getElementsByClassName('p3');

for (const x in elementsP) {
    elementsP[x].oncontextmenu = () => {
        //evitar comportamiento habitual
        elementsP[x].remove();
        //document.getElementById('boxP').removeChild(elementsP[x])
    };
    elementsP[x].onclick = () =>{elementsP[x].style.display = 'none'};
}

let aparecer = () =>{
    let elementsP = document.getElementsByClassName('p3');
    for (const x in elementsP) {
        elementsP[x].style.display = '';
    }

}

//solucion profe

