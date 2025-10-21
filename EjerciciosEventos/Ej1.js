
let addElementList = () =>{
    let boxUl = document.getElementById('numberList');
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber)
    let newElement = document.createElement('li');
    newElement.textContent = randomNumber;
    boxUl.appendChild(newElement);
}

document.getElementById('buttonAddLi').addEventListener('click',function () {addElementList()});