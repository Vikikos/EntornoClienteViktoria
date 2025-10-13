let productos = [
{ nombre: "Laptop", categoria: "Electrónica", precio: 1500 },
{ nombre: "Silla", categoria: "Muebles", precio: 100 },
{ nombre: "Cargador", categoria: "Electrónica", precio: 50 }
];
//se puede usar find()
let encontrado = productos.filter(function(d1){
    return d1.nombre == "Silla";
});
console.log();

