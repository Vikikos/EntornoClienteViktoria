let divColor = document.getElementsByClassName('Ej6');

for (const x in divColor) {
    divColor[x].addEventListener('mouseout', () =>{
        document.body.style.backgroundColor = '#fff';
    });
    divColor[x].addEventListener('mouseover', () =>{
        document.body.style.backgroundColor = divColor[x].style.backgroundColor;
    });
    
}