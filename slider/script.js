// ! DOM ELEMENTS
const sliderEl = document.getElementById('slider');
const carouselEl = sliderEl.querySelector('div.carousel');
const container = sliderEl.querySelector('.slider-container');
// buttons to change slide
const prevBtn = sliderEl.querySelector('span.prev-btn');
const forwBtn = sliderEl.querySelector('span.forw-btn');

// ! VARIABLES
let currentIndex = 1;
const slides = [
    {
        'url' : "img/01.png",
        'alt': 'Astro Bot'
    },
    {
        'url' : "img/02.jpg",
        'alt': 'Hollow Knight'
    },
    {
        'url' : "img/03.jpg",
        'alt': 'Silent Hill 2'
    },
    {
        'url' : "img/04.webp",
        'alt': 'Stray'
    },
    {
        'url' : "img/05.png",
        'alt': 'Constance'
    },
    {
        'url' : "img/06.jpg",
        'alt': 'Lies of P'
    },
];


function showImages(){
    currentIndex = 1;
}
// append the image with the same index as the current one
slides.forEach((obj, index) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', obj['url']);
    imgEl.setAttribute('alt', obj['alt']);
    container.appendChild(imgEl);
    if(index === currentIndex && !imgEl.classList.contains('active')){
        imgEl.classList.add('active');
    } else if(index !== currentIndex && imgEl.classList.contains('active')){
        imgEl.classList.remove('active');
    }
})

forwBtn.addEventListener('click', function(){
    nextSlide(currentIndex, slides);
});


/**
 * 
 * @param {*} index the var index (eg. currentIndex)
 * @param {*} elementList the array or object with the elements that should be displayed
 */
function nextSlide(index, elementList){
    if(index < elementList.length){
        index++;
    } else {
        index = 0;
    }
    console.log(index, elementList.length);
}