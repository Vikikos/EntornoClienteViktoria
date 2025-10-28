let divMove = document.getElementById('capa1');
let divFin = document.getElementById('capa2');
divMove.addEventListener('dragstart',dragStart(event));
divMove.addEventListener('drop',drop(event));
divMove.addEventListener('dragover',allowDrop(event));

divFin.addEventListener('drop',drop(event));
divFin.addEventListener('dragover',allowDrop(event));

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}