const gallery = document.getElementById('gallery');

const fotos = [
    'portfolio/Wedding A/photo1.jpg',
    'portfolio/Wedding A/photo2.jpg',
    'portfolio/Wedding B/photo1.jpg',
    'portfolio/Wedding C/photo1.jpg',
    'portfolio/Wedding C/photo2.jpg',
    'portfolio/Wedding C/photo3.jpg'
];

fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});