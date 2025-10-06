const gallery = document.getElementById('gallery');

const fotos = [
    '../gallery/Wedding B/photo1.jpg',
    '../gallery/Wedding B/photo2.jpg',
    '../gallery/Wedding B/photo3.jpg',
    '../gallery/Wedding B/photo4.jpg',
    '../gallery/Wedding B/photo5.jpg',
    '../gallery/Wedding B/photo6.jpg',
    '../gallery/Wedding B/photo7.jpg'
];

fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});