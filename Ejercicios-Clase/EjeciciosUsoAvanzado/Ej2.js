const productos = [ 
    { nombre: "Camiseta", precio: 20 }, 
    { nombre: "Pantalón", precio: 30 }, 
    { nombre: "Zapatos", precio: 50 } 
];

console.log(productos);

productos.forEach(producto => {
    //producto.precio += producto.precio*0.1;
    producto.precio *= 1.1;
});

console.log(productos);