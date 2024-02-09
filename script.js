let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let video=document.querySelector('video');

setTimeout(()=>{
    document.getElementsByClassName('tiempo').innerHTML=` Duracion video  4:41`},100);
    for (let i = 0; i < video.time; i++) {
    console.log(video.currentTime);
};
playBoton.addEventListener('click',()=>{
    video.play();
});
pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});