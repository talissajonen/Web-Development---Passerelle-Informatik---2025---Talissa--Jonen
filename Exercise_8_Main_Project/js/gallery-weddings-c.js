const gallery = document.getElementById('gallery');

const fotos = [
    '../gallery/Wedding C/photo1.jpg',
    '../gallery/Wedding C/photo2.jpg',
    '../gallery/Wedding C/photo3.jpg',
    '../gallery/Wedding C/photo4.jpg',
    '../gallery/Wedding C/photo5.jpg',
    '../gallery/Wedding C/photo6.jpg',
    '../gallery/Wedding C/photo7.jpg'
];

fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});