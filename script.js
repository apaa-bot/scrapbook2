
const photos = [

"assets/photos/foto1.jpg",
"assets/photos/foto2.jpg",
"assets/photos/foto3.jpg",
"assets/photos/foto4.jpg",
"assets/photos/foto5.jpg",
"assets/photos/foto6.jpg",
"assets/photos/foto7.jpg",
"assets/photos/foto8.jpg"

];

let index = 0;

const slide = document.getElementById("slide");

document.getElementById("total").innerText = photos.length;

function updateSlide(){

slide.src = photos[index];

document.getElementById("current").innerText =
index + 1;

}

document.querySelector(".next")
.addEventListener("click",()=>{

index++;

if(index >= photos.length){
index = 0;
}

updateSlide();

});

document.querySelector(".prev")
.addEventListener("click",()=>{

index--;

if(index < 0){
index = photos.length - 1;
}

updateSlide();

});

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();
musicBtn.innerText = "⏸ Pause";

}else{

music.pause();
musicBtn.innerText = "🎵 Play";

}

playing = !playing;

});

for(let i=0;i<40;i++){

const flower =
document.createElement("div");

flower.classList.add("flower");

flower.innerHTML = Math.random() > 0.5
? "🌸"
: "🌷";

flower.style.left =
Math.random()*100 + "%";

flower.style.animationDuration =
(5 + Math.random()*10) + "s";

flower.style.opacity =
Math.random();

document.querySelector(".flowers")
.appendChild(flower);

}