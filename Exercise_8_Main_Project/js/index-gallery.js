const heroImg = document.getElementById('hero-img');

const fotos = [
    '../gallery/Wedding A/photo1.jpg',
    '../gallery/Wedding A/photo2.jpg',
    '../gallery/Wedding A/photo3.jpg',
    '../gallery/Wedding A/photo4.jpg',
    '../gallery/Wedding A/photo5.jpg'
];

let index = 0;

// Inicializa
heroImg.src = fotos[0];

function changeHero() {
    // fade-out
    heroImg.style.opacity = 0;

    // troca a imagem depois do fade
    setTimeout(() => {
        index = (index + 1) % fotos.length;
        heroImg.src = fotos[index];
        // fade-in
        heroImg.style.opacity = 1;
    }, 500); // igual ao tempo da transição
}

// muda a cada 5 segundos
setInterval(changeHero, 5000);