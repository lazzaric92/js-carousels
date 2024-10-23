document.addEventListener('DOMContentLoaded', function(){
    // ! DOM ELEMENTS
    const scrollDragEl = document.getElementById('scroll-drag');
    const carouselEl = scrollDragEl.querySelector('div.carousel');

    // ! VARIABLES
    let isDown = false;  // <-- mouse behaviour, is true when clicking
    let startX;
    let scrollLeftVar;
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

    slides.forEach((obj) => {
        // creating carousel slides with background image
        const slideEl = document.createElement('div');
        slideEl.classList.add('slide');
        slideEl.setAttribute('style', `background-image: url(${obj['url']})`);
        slideEl.setAttribute('data-alt', obj['alt']);
        carouselEl.appendChild(slideEl);
    });

    carouselEl.addEventListener('mousedown', event => {
        isDown = true;
        carouselEl.classList.add('active');
        // # since the container is wider than the single slide 
        startX = event.pageX - carouselEl.offsetLeft;
        scrollLeftVar = carouselEl.scrollLeft;
    });

    carouselEl.addEventListener('mouseleave', () => {
        isDown = false;
        if(carouselEl.classList.contains('active')){
            carouselEl.classList.remove('active');
        }
    });

    carouselEl.addEventListener('mouseup', () => {
        isDown = false;
        if(carouselEl.classList.contains('active')){
            carouselEl.classList.remove('active');
        }
    });

    carouselEl.addEventListener('mousemove', event => {
        if(!isDown){
            return;
        };
        event.preventDefault();
        const x = event.pageX - carouselEl.offsetLeft;
        const SCROLL_SPEED = 3;
        const walk = (x - startX) * SCROLL_SPEED;
        carouselEl.scrollLeft = scrollLeftVar - walk;
    });
})