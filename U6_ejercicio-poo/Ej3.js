let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    anoPublicacion: 1967
}
for (const key in libro) {
    console.log(key + ': '+  libro[key]);
}