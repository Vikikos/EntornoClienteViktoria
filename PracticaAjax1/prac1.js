fetch('https://randomuser.me/api')
.then((res)=>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Error: " + res.status);
    }
})
.then((data)=>{
    let caja = document.getElementById('res');
    
    for (const person of data['data']) {
        caja.innerHTML = person['firstname'];
        caja.innerHTML += '<img src="' + person['image'] + '">';
    }
})
.catch(error=>{
    console.log(error);
})