document.addEventListener('DOMContentLoaded', function(){

    // ! DOM ELEMENTS
    const sequenceEl = document.getElementById('sequence');
    const carouselEl = sequenceEl.querySelector('div.carousel');
    const containerEl = sequenceEl.querySelector('.slides-container');
    const slideEl = sequenceEl.querySelector('.slides-container > img');
    // buttons to change slide
    const prevBtn = sequenceEl.querySelector('.carousel-arrow.prev');
    const nextBtn = sequenceEl.querySelector('.carousel-arrow.next');
    
    // ! VARIABLES
    const gap = 16;
    const carouselWidth = carouselEl.offsetWidth;
    const slideWidth = slideEl.offsetWidth;
    const slidesNumber = 3;  // <-- number of a fully visible slide
    const width = carouselWidth - (slideWidth * slidesNumber) - (gap * slidesNumber);  // <-- width of the fully visible slides width their margin
    console.log(carouselWidth, width);

    nextBtn.addEventListener('click', moveForward);
    prevBtn.addEventListener('click', moveBackward);
    
    
    // ! FUNCTIONS
    function moveForward(){
        carouselEl.scrollBy(carouselWidth - width, 0);
        if (carouselEl.scrollWidth !== 0) {
            prevBtn.style.display = "flex";
        }
        if (carouselEl.scrollWidth - width <= carouselEl.scrollLeft + carouselWidth) {
            nextBtn.style.display = "none";
        }
    }

    function moveBackward(){
        carouselEl.scrollBy(-(carouselWidth + gap), 0);
        if (carouselEl.scrollLeft - carouselWidth - gap <= 0) {
            prevBtn.style.display = "none";
        }
        if (!(carouselEl.scrollWidth - carouselWidth - gap <= carouselEl.scrollLeft + carouselWidth)) {
            nextBtn.style.display = "flex";
        }
    }
});


/* 

const gap = 16;

const carousel = document.getElementById("carousel");
  content = document.getElementById("container");
  slide = carousel.querySelector('#container > div');
  next = document.getElementById("next");
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width - (width - slideWidth * 5 - gap*5), 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
let slideWidth = slide.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));


*/