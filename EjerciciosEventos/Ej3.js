let deletElement = () => {
    document.getElementById('boxP').removeChild(this);
    console.log('Eliminar')
}

let hideElement = () => {
    console.log(this)
    this.style.display = 'none';
    console.log('ocultar')
}

let elementsP = document.getElementsByClassName('p3');
for (const x in elementsP) {
    elementsP[x].onclick = hideElement;
    elementsP[x].ondblclick = deletElement;
}