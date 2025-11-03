let positionMouse = (evento) => {
    let boxPosition = document.getElementById('mousePosition');
    boxPosition.textContent = evento.clientX + ' ' + evento.clientY;
}
document.onmousemove = positionMouse;