document.addEventListener('DOMContentLoaded', function(){
    // ! DOM ELEMENTS
    const scrollDragEl = document.getElementById('scroll-drag');
    const carouselEl = scrollDragEl.querySelector('div.carousel');

    // ! VARIABLES
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
        // creating carousel images
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', obj['url']);
        imgEl.setAttribute('alt', obj['alt']);
        carouselEl.appendChild(imgEl);
    });
})