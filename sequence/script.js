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
    const width = carouselWidth - (slideWidth * slidesNumber) - (gap * slidesNumber);  // <-- width of the fully visible slides with their margin
    // console.log(carouselWidth, width);

    nextBtn.addEventListener('click', moveForward);
    prevBtn.addEventListener('click', moveBackward);
    
    
    // ! FUNCTIONS
    function moveForward(){
        containerEl.scrollLeft += carouselWidth - width;
        // containerEl.scrollBy(carouselWidth - width, 0);
        // console.log("scrollWidth " + carouselEl.scrollWidth, "-- scrollWidth - width " + (carouselEl.scrollWidth - width), "-- scrollLeft + carouselWidth " + (carouselEl.scrollLeft + carouselWidth));
        // if (carouselEl.scrollWidth !== 0) {
        //     prevBtn.style.display = "flex";
        // }
        // if (carouselEl.scrollWidth - width <= carouselEl.scrollLeft + carouselWidth) {
        //     nextBtn.style.display = "none";
        // }
    }

    function moveBackward(){
        containerEl.scrollLeft += width- carouselWidth;
        // containerEl.scrollBy(-(carouselWidth), 0);
        // if (carouselEl.scrollLeft - carouselWidth <= 0) {
        //     prevBtn.style.display = "none";
        // }
        // if (!(carouselEl.scrollWidth - carouselWidth <= carouselEl.scrollLeft + carouselWidth)) {
        //     nextBtn.style.display = "flex";
        // }
    }
});