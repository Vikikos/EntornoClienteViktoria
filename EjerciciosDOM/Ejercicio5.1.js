let sectionProductos = document.getElementById('productos');

let res = document.createElement('div');
res.textContent = sectionProductos.getElementsByTagName('li').length;
document.getElementById('log').appendChild(res);
