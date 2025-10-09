const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

// Array de fotos
const fotos = [
    '../gallery/Wedding A/photo1.jpg',
    '../gallery/Wedding A/photo2.jpg',
    '../gallery/Wedding A/photo3.jpg',
    '../gallery/Wedding A/photo4.jpg',
    '../gallery/Wedding A/photo5.jpg',
    '../gallery/Wedding A/photo6.jpg',
    '../gallery/Wedding A/photo7.jpg',
    '../gallery/Wedding A/photo8.jpg',
    '../gallery/Wedding A/photo9.jpg'
];

// Preencher galeria
fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);

    img.addEventListener('click', () => {
        lbImg.src = src;
        lightbox.style.display = 'flex';
    });
});

// Fechar ao clicar no X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fechar clicando fora da imagem
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});