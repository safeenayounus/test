const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}


showSlide(0);


const slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);
// slide1
const slides1 = document.querySelectorAll('.slide1');
let currentSlide1 = 0;

function showSlide1(n) {
    slides1[currentSlide1].style.display = 'none';
    currentSlide1 = (n + slides.length) % slides.length;
    slides1[currentSlide1].style.display = 'block';
}


showSlide1(0);


const slideInterval1 = setInterval(() => {
    showSlide1(currentSlide1 + 1);
}, 3000);



// slide2

const slides2 = document.querySelectorAll('.slide2');
let currentSlide2 = 0;

function showSlide2(n) {
    slides2[currentSlide2].style.display = 'none';
    currentSlide2 = (n + slides.length) % slides.length;
    slides2[currentSlide1].style.display = 'block';
}


showSlide2(0);


const slideInterval2 = setInterval(() => {
    showSlide2(currentSlide2 + 1);
}, 3000);

