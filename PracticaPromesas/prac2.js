let data = [
    {name: "Nacho", phone: "966112233", age: 40},
    {name: "Ana", phone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", phone: "633663366", age: 17}
];

let cajaLista = document.getElementById('listaPersonas');

function crearLi(persona) {
    let newLi = document.createElement('li');
    newLi.textContent = persona.name;
    newLi.textContent += ' - ' + persona.phone;
    newLi.textContent += ' - ' + persona.age;
    return newLi;
}

data.forEach(persona => {
    //escribimos la lista con los datos iniciales
    let newLi = crearLi(persona);
    cajaLista.appendChild(newLi);
});

function newPerson(persona) {
    return new Promise((resolver,rechazar) =>{
        data.forEach(per => {
            if(per.phone == persona.phone){
                rechazar('La persona ya existe, no se puede añadir');
            }
        });
        //si no existe

        //añadimos al array
        data.push(persona);

        //añadimos al html
        let newLi = crearLi(persona);
        cajaLista.appendChild(newLi);
        resolver(persona.name + ' se ha añadido con exito');
    })
}

let buttonAdd = document.getElementById('addPerson');
let cajaRes = document.getElementById('res');

buttonAdd.addEventListener('click',()=>{
    newPerson().then((res)=>{
        cajaRes.textContent = res;
    }).catch((error)=>{
        cajaRes.textContent = error;
    })
})


let buttonDelete = document.getElementById('deletePerson');

buttonDelete.addEventListener('click',()=>{
    newPerson().then((res)=>{

    }).catch((error)=>{
        
    })
})

console.log (data);
/*
newPerson ({name: "Juan", phone: "965661564", age: 60});
newPerson ({name: "Rodolfo", phone: "633663366", age: 20});
deletePerson ("966112233");
deletePerson ("123456789");
console.log (data);
*/