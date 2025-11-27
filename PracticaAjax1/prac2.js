document.getElementById('boton').addEventListener('click',(e)=>{
    let idPro = document.getElementById('idProduct').value
    //1-194

    let res1 = document.getElementById('res1');
    let errores =document.getElementById('errores');

    res1.innerHTML = '';
    errores.textContent = '';

    fetch(`https://dummyjson.com/products/${idPro}`)
    .then((res)=>{
        if(res.ok){
            return res.json();
        }else{
            throw new Error('GET ' + res.status);
        }
    })
    .then((product)=>{
        //1
        console.log(product);
        res1.innerHTML = product['title'] + ' - ' + product['id'];
        res1.innerHTML +='<br>Precio: ' + product['price'];
        return product;
    })
    .then((product)=>{
        const newProduct = {
            'id': product['id'],
            'title': product['title'],
            'price' : product['price']
        }
        //2
        fetch('https://httpbin.org/post',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then((res)=>{
            if(res.ok){
                errores.textContent = 'GET ' + res.status;
                return res.json();
            }else{
                throw new Error('POST '+res.status);
            }
        })
        .then((data)=>{
            document.getElementById('res2').textContent = data.json.title;
        })
    })
    .catch(error=>{
        document.getElementById('errores').textContent = error;
    })
})