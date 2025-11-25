fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Error");
    }
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});