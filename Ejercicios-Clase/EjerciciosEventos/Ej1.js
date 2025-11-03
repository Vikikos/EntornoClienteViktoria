const boxUl = document.getElementById('numberList');

document.getElementById('buttonAddLi').addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random()*100);
    //console.log(randomNumber)
    let newElement = document.createElement('li');
    newElement.textContent = randomNumber;
    boxUl.appendChild(newElement);
});