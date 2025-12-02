
document.getElementById('boton').addEventListener('click',()=>{
    let select = document.getElementById('velocidad');
    let video = document.getElementById('video');
    video.playbackRate = select.value;
})
