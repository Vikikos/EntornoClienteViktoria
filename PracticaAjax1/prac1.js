fetch('https://randomuser.me/api')
.then((res)=>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Error: " + res.status);
    }
})
.then((data)=>{
    let person = data['results'][0];
    let caja = document.getElementById('res');
    console.log(person['name'])
    document.getElementById('imgPerson').innerHTML = '<img src="'+ person['picture']['large'] +'">'
    caja.innerHTML = person['name']['first'] + ' ' + person['name']['last'];
    caja.innerHTML += '<br>Email: '+ person['email'];
    caja.innerHTML += '<br>Street: ' + person['location']['street']['name'] + ' ' + person['location']['street']['number'];
    caja.innerHTML += '<br>' + person['location']['country'];
}) 
.catch(error=>{
    console.log(error);
})