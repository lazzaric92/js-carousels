document.addEventListener('DOMContentLoaded', function(){

    // ! DOM ELEMENTS
    const sliderEl = document.getElementById('slider');
    const container = sliderEl.querySelector('.slider-container');
    const dotsContainer = sliderEl.querySelector('.dots-container');
    // buttons to change slide
    const prevBtn = sliderEl.querySelector('span.prev-btn');
    const forwBtn = sliderEl.querySelector('span.forw-btn');
    
    // ! VARIABLES
    let activeIndex;
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
    
    
    // create the images and set as active the first
    slides.forEach((obj, index) => {
        // creating carousel images
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', obj['url']);
        imgEl.setAttribute('alt', obj['alt']);
        container.appendChild(imgEl);
        if(index === 0){
            imgEl.classList.add('active');
        }

        // creating dots
        const dotEl = document.createElement('div');
        dotEl.classList.add('dot');
        dotsContainer.appendChild(dotEl);
        if(index === 0){
            dotEl.classList.add('active');
        }

        dotEl.addEventListener('click', function(){
            activeIndex = index;
            changeImg();
        })
    })
    
    forwBtn.addEventListener('click', function(){
        nextSlide();
    });
    
    prevBtn.addEventListener('click', function(){
        prevSlide();
    });
    
    
    // ! FUNCTIONS
    // --> function to set the index of the active image as the current activeIndex
    /**
     * Function to set the index of the active image as the current activeIndex
     */
    function getActiveIndex(){
        const imgList = container.children;
        for(let index = 0; index < imgList.length; index++){
            const obj = imgList[index];
            if(obj.classList.contains('active')){
                activeIndex = index;
            }
        }
    }
    
    // --> function to set the image with index equal to activeIndex as active
    /**
     * Function to set the image with index equal to activeIndex as active
     */
    function changeImg(){
        const imgList = container.children;
        const dotsList = dotsContainer.children;
        for(let index = 0; index < imgList.length; index++){
            const obj = imgList[index];
            const dot = dotsList[index];
            if(activeIndex !== index && obj.classList.contains('active')){
                obj.classList.remove('active');
                dot.classList.remove('active');
            } else if(activeIndex === index && !obj.classList.contains('active')){
                obj.classList.add('active');
                dot.classList.add('active');
            }
        }
    }
    
    // --> function to loop forward
    function nextSlide(){
        getActiveIndex();
        if(activeIndex >= container.children.length - 1){
            activeIndex = 0;
        } else {
            activeIndex++;
        }
        changeImg();
    }
    
    // --> function to loop backward
    function prevSlide(){
        getActiveIndex();
        if(activeIndex === 0 ){
            activeIndex = container.children.length - 1;
        } else {
            activeIndex--;
        }
        changeImg();
    }
});