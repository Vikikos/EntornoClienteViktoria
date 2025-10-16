const personas = [ 
    { nombre: "Juan", edad: 17 }, 
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 19 }, 
    { nombre: "Laura", edad: 16 } 
];
console.log(personas);

let arrayNuevo = personas.filter(persona => persona.edad > 18);
console.log(arrayNuevo);

arrayNuevo = arrayNuevo.map(persona => {
    persona.edad = persona.edad*2;
    return persona;
});
console.log(arrayNuevo);

let suma = arrayNuevo.reduce((per1,per2) => per1.edad+ per2.edad);


console.log(suma);