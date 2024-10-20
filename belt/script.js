document.addEventListener('DOMContentLoaded', function(){
    // ! DOM ELEMENTS
    const beltEl = document.getElementById('belt');
    const containerEl = beltEl.querySelector('div.container');

    // ! VARIABLES
    const images = [
        {
            'url' : "img/01_Logo.png",
            'alt': 'Astro Bot Logo'
        },
        {
            'url' : "img/02_Logo.webp",
            'alt': 'Hollow Knight Logo'
        },
        {
            'url' : "img/03_Logo.webp",
            'alt': 'Silent Hill 2 Logo'
        },
        {
            'url' : "img/04_Logo.png",
            'alt': 'Stray Logo'
        },
        {
            'url' : "img/05_Logo.webp",
            'alt': 'Constance Logo'
        },
        {
            'url' : "img/06_Logo.png",
            'alt': 'Lies of P Logo'
        },
    ];

    for(let i = 0; i < 2; i++){
        images.forEach((obj) => {
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', obj['url']);
            imgEl.setAttribute('alt', obj['alt']);
            containerEl.appendChild(imgEl);
        })
    }
})