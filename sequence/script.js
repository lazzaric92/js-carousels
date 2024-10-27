document.addEventListener('DOMContentLoaded', function(){

    // ! DOM ELEMENTS
    const sequenceEl = document.getElementById('sequence');
    const carouselEl = sequenceEl.querySelector('div.carousel');
    const containerEl = sequenceEl.querySelector('.slides-container');
    const slides = sequenceEl.querySelectorAll('.slide');
    // buttons to change slide
    const prevBtn = sequenceEl.querySelector('.carousel-arrow.prev');
    const nextBtn = sequenceEl.querySelector('.carousel-arrow.next');
    
    // ! VARIABLES
    const slidesArray = [
        {
            "url": "img/01.png",
            "alt": "Astro Bot"
        },
        {
            "url": "img/02.jpg",
            "alt": "Hollow Knight"
        },
        {
            "url": "img/03.jpg",
            "alt": "Silent Hill 2 Remake"
        },
        {
            "url": "img/04.webp",
            "alt": "Stray"
        },
        {
            "url": "img/05.png",
            "alt": "Constance"
        },
        {
            "url": "img/06.jpg",
            "alt": "Lies of P"
        },
        {
            "url": "img/07.jpg",
            "alt": "Riven Remake"
        },
        {
            "url": "img/08.avif",
            "alt": "Dredge"
        },
        {
            "url": "img/09.jpg",
            "alt": "Bloodborne"
        },
        {
            "url": "img/10.webp",
            "alt": "Omori"
        },
        {
            "url": "img/11.png",
            "alt": "Ico"
        },
        {
            "url": "img/12.png",
            "alt": "Enotria: The Last Song"
        },
        {
            "url": "img/13.webp",
            "alt": "Cult of the Lamb"
        },
        {
            "url": "img/14.png",
            "alt": "Undertale"
        },
        {
            "url": "img/15.jpeg",
            "alt": "Persona 3 Reload"
        },
        {
            "url": "img/16.jpg",
            "alt": "Stardew Valley"
        },
        {
            "url": "img/17.jpg",
            "alt": "Inscryption"
        },
        {
            "url": "img/18.jpg",
            "alt": "Resident Evil Village"
        },
        {
            "url": "img/19.webp",
            "alt": "Dead Space Remake"
        },
        {
            "url": "img/20.jpg",
            "alt": "Bayonetta"
        },
    ]
    const gap = 16;
    const carouselWidth = carouselEl.offsetWidth;
    
    // prevBtn display check when reloading 
    if(containerEl.scrollLeft === 0){
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    };

    prevBtn.addEventListener('click', () => {
        containerEl.scrollBy(-carouselWidth, 0);
        console.log(carouselWidth, containerEl.scrollLeft);
        // # prevBtn display
        if(containerEl.scrollLeft === 0){
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
        };

        // # nextBtn display
        if(containerEl.scrollLeft % carouselWidth !== 0){
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        };
    })

    nextBtn.addEventListener("click", () => {
        containerEl.scrollBy(carouselWidth, 0);
        console.log(carouselWidth, containerEl.scrollLeft);
        // # prevBtn display
        if(containerEl.scrollLeft === 0){
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
        };

        // # nextBtn display
        if(containerEl.scrollLeft % carouselWidth !== 0){
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'flex';
        };
    });
});