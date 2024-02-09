let img1 = document.getElementById("imgrompe1");
let drop1= document.getElementById("cuadrodrop1");
let img2 = document.getElementById("imgrompe2");
let drop2= document.getElementById("cuadrodrop2");
let img3 = document.getElementById("imgrompe3");
let drop3= document.getElementById("cuadrodrop3");


img1.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData(`Text`,"./assets/imagenes/Rompe1.png");  
});
img1.addEventListener("dragend",(e)=>{
    let imagen= e.target
    imagen.style.display="none"
});
drop1.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
drop1.addEventListener("drop", (e)=>{
    let infoimg1 = e.dataTransfer.getData(`Text`);
    drop1.innerHTML = `<img id="imgrompe1"  src="${infoimg1}"/>`;  
});


img2.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData(`Text`,"./assets/imagenes/rompe2.png");
});
img2.addEventListener("dragend",(e)=>{
    let imagen= e.target
    imagen.style.display="none"
});
drop2.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
drop2.addEventListener("drop", (e)=>{
    let infoimg2 = e.dataTransfer.getData(`Text`);
    drop2.innerHTML = `<img id="imgrompe2"  src="${infoimg2}"/>`;
});


img3.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData(`Text`,"./assets/imagenes/Rompe3.png");
});
img3.addEventListener("dragend",(e)=>{
    let imagen= e.target
    imagen.style.display="none"
});
drop3.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
drop3.addEventListener("drop", (e)=>{
    let infoimg3 = e.dataTransfer.getData(`Text`);
    drop3.innerHTML = `<img id="imgrompe3"  src="${infoimg3}"/>`;
});


function reiniciar() {
    window.location.reload();
};