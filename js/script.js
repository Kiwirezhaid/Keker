const btnOpen = document.getElementById("btn");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("modal-close");

btnOpen.addEventListener("click", () => {
    modal.classList.add("show");
    setTimeout(() => {
        modal.classList.remove("show");
    }, 3000);
});

btnClose.addEventListener("click", () => {
    modal.classList.remove("show");
});


/*--------слайдер1----------- */
let images = ["img/1.webp", "img/2.webp", "img/3.webp", "img/4.webp"];
let titles = ["картинка 1", "картинка 2", "картинка 3", "картинка 4" ]
const slider1 = document.querySelector(".slider1__content");
const title1 = document.querySelector(".slider1__title");

let i = 0;
setInterval(()=>{
    i++;
    if (i == images.length) i = 0;    
    slider1.style.backgroundImage = "url("+ images[i] +")";
    title1.innerHTML = titles[i];
}, 3000);


/*----------слайдер 4--------------- */
const slider4 = document.getElementById("slider4");
const btnPrev = document.getElementById("slider4-btn-prev");
const btnNext = document.getElementById("slider4-btn-next");

const w = 400;
let current = -2;
let count = slider4.querySelectorAll(".slider4__item").length;


function sliderPos(width, cur){
    let pos = width*cur;
    slider4.style.transform = "translate("+ pos +"px)";
}

sliderPos(w, current);

btnPrev.addEventListener("click", () => {
    if (current - 3 > -count){
        current--;
        sliderPos(w, current);
    } 
})

setInterval(() => {
    if (current - 3 > -count){
        current--;
        sliderPos(w, current);
    } 
}, 5000);