fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Error");
    }
})
.then((data)=>{
    let lista = document.getElementById('ej2');
    for (const user of data) {
        let li = document.createElement('li');
        li.innerHTML = user['name'] + ' - ' + user['email'];
        lista.appendChild(li);
    }
})
.catch((error)=>{
    console.log(error);
});