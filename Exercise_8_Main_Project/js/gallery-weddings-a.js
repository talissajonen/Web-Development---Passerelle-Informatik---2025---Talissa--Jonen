const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

const fotos = [
    '../gallery/WeddingA/photo1.jpg',
    '../gallery/WeddingA/photo2.jpg',
    '../gallery/WeddingA/photo3.jpg',
    '../gallery/WeddingA/photo4.jpg',
    '../gallery/WeddingA/photo5.jpg',
    '../gallery/WeddingA/photo6.jpg',
    '../gallery/WeddingA/photo7.jpg',
    '../gallery/WeddingA/photo8.jpg',
    '../gallery/WeddingA/photo9.jpg'
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