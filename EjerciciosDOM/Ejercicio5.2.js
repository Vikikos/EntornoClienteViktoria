let liP1 = document.getElementById('p1');

let res2 = document.createElement('div');
let res3 = document.createElement('div');

res2.innerHTML = liP1.innerHTML;
document.getElementById('log').appendChild(res2);

res3.textContent = liP1.textContent;
document.getElementById('log').appendChild(res3);
