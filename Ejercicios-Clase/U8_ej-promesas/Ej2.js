function primeraTarea() {
    //devuelve 10
    return Promise.resolve(10);
}
function segundaTarea(num) {
    return Promise.resolve(num*2);
}
function terceraTarea(num) {
    return Promise.resolve(num+5);
}


primeraTarea().then((res) =>{
    console.log(res);
    segundaTarea(res).then((res2)=>{
        console.log(res2)
        terceraTarea(res2).then((res3) =>{
            console.log(res3)
        })
    })
})


