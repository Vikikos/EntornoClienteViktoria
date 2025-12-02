let body = document.body;
navigator.geolocation.getCurrentPosition((pos)=>{
    if(pos.coords.latitude< 0){
        //sur
        color = 'green';
    }else if(pos.coords.latitude > 0){
        //norte
        color = 'blue';
    }else{
        color = 'yellow';
    }
    body.style.backgroundColor = color;
});

