const gallery = document.getElementById('gallery');

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
];

fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});