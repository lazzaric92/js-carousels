// ! DOM ELEMENTS
const sliderEl = document.getElementById('slider');
const carouselEl = sliderEl.querySelector('div.carousel');
// buttons to change slide
const prevBtn = sliderEl.querySelector('span.prev-btn');
const forwBtn = sliderEl.querySelector('span.forw-btn');
// slides
const slideEls = sliderEl.querySelectorAll('.slider-container img');

// ! VARIABLES
let currentIndex = 2;

// display the image with the same data-index as the current one
slideEls.forEach((element) => {
    const imgIndex = element.getAttribute('data-index');
    if(imgIndex == currentIndex && !element.classList.contains('active')){
        element.classList.add('active');
    } else if(imgIndex != currentIndex && element.classList.contains('active')) {
        element.classList.remove('active');
    }
})

