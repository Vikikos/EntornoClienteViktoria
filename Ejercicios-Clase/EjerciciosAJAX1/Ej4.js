const newData ={
    'name': 'Nico',
    'job' : 'ingeniero'
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)//datos que queremos añadir
})
.then((res)=>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Error" + res.status); 
    }
})
.then((data)=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
})