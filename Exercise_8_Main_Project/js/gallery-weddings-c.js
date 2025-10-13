const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

const fotos = [
    '../gallery/WeddingC/photo1.jpg',
    '../gallery/WeddingC/photo2.jpg',
    '../gallery/WeddingC/photo3.jpg',
    '../gallery/WeddingC/photo4.jpg',
    '../gallery/WeddingC/photo5.jpg',
    '../gallery/WeddingC/photo6.jpg',
    '../gallery/WeddingC/photo7.jpg'
];

// Adiciona imagens à galeria
fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);

    // Abre lightbox ao clicar
    img.addEventListener('click', () => {
        lbImg.src = src;
        lightbox.style.display = 'flex';
    });
});

// Fecha ao clicar no X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fecha ao clicar fora da imagem
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});