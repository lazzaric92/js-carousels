document.addEventListener('DOMContentLoaded', function(){

    // ! DOM ELEMENTS
    const sequenceEl = document.getElementById('sequence');
    const carouselEl = sequenceEl.querySelector('div.carousel');
    const containerEl = sequenceEl.querySelector('.slides-container');
    const slides = sequenceEl.querySelectorAll('.slides-container > img');
    // buttons to change slide
    const prevBtn = sequenceEl.querySelector('.carousel-arrow.prev');
    const nextBtn = sequenceEl.querySelector('.carousel-arrow.next');
    
    // ! VARIABLES
    const gap = 16;
    const carouselWidth = carouselEl.offsetWidth;
    const slideWidth = slides[0].offsetWidth;
    const slidesNumber = 3;  // <-- number of fully visible slides
    const width = carouselWidth - (slideWidth * slidesNumber) - (gap * slidesNumber);  // <-- width of the fully visible slides with their margin

    const slideOffLeft = slides[slidesNumber].offsetLeft;

    

    slides.forEach((slide, index) => {
        if(index % slidesNumber === 0){
            console.log(slide.offsetLeft);
        }
    });


    // console.log(slides);
    nextBtn.addEventListener('click', moveForward);
    prevBtn.addEventListener('click', moveBackward);
    
    
    // ! FUNCTIONS
    function moveForward(){
        containerEl.scrollLeft += carouselWidth - width;
        slides.forEach((slide, index) => {
            if(index % slidesNumber === 0){
                console.log(slide.offsetLeft);
            }
        });
    }

    function moveBackward(){
        containerEl.scrollLeft += width- carouselWidth;
        slides.forEach((slide, index) => {
            if(index % slidesNumber === 0){
                console.log(slide.offsetLeft);
            }
        });
    }
});


/* 
3n slide offsetLeft
0 
905 
1810 
2715 
3621 
4526 
5431
*/