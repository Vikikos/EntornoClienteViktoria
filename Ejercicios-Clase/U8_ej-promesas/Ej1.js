function sumarAsync(a,b) {
    return new Promise((resolver,rechazar)=>{
        if(parseInt(a) && parseInt(b)){
            resolver(a+b);
        }else{
            rechazar(Error('Alguno no es numero'));
        }
    })
}


sumarAsync(4,5)
.then((respuesta) =>{
    console.log(respuesta);
})
.catch((error) =>{
    console.log(error.message);
})

sumarAsync(4,'j')
.then((respuesta) =>{
    console.log(respuesta);
})
.catch((error) =>{
    console.log(error.message);
})