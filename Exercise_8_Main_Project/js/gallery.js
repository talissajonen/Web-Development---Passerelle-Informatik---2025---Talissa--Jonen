const gallery = document.getElementById('gallery');
const heroImg = document.getElementById('hero-img');

// Img Array
const fotos = [
    '../gallery/Wedding A/photo1.jpg',
    '../gallery/Wedding A/photo2.jpg',
    '../gallery/Wedding A/photo3.jpg',
    '../gallery/Wedding A/photo4.jpg',
    '../gallery/Wedding A/photo5.jpg',
    '../gallery/Wedding A/photo6.jpg',
    '../gallery/Wedding A/photo7.jpg',
    '../gallery/Wedding A/photo8.jpg',
    '../gallery/Wedding A/photo9.jpg',
    '../gallery/Wedding B/photo1.jpg',
    '../gallery/Wedding B/photo2.jpg',
    '../gallery/Wedding B/photo3.jpg',
    '../gallery/Wedding B/photo4.jpg',
    '../gallery/Wedding B/photo5.jpg',
    '../gallery/Wedding B/photo6.jpg',
    '../gallery/Wedding B/photo7.jpg'
];

// Fill the gallery
fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});

// Hero image 
let index = 0;

function changeHero() {
    heroImg.style.opacity = 0;
    setTimeout(() => {
        heroImg.src = fotos[index]; 
        heroImg.style.opacity = 1;         
        index = (index + 1) % fotos.length;
    }, 500);
}
// First image initialized
heroImg.src = fotos[0];

// Change every 5 seconds
setInterval(changeHero, 5000);