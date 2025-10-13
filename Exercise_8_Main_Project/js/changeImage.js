const mainPic = document.getElementById('mainPic');

const fotos = [
    '../gallery/WeddingA/photo1.jpg',
    '../gallery/WeddingA/photo2.jpg',
    '../gallery/WeddingA/photo3.jpg',
    '../gallery/WeddingA/photo4.jpg',
    '../gallery/WeddingA/photo5.jpg'
];

let count = 0;

function nextPic() {
    mainPic.style.opacity = 0;
    setTimeout(() => {
        count = (count + 1) % fotos.length;
        mainPic.src = fotos[count];
        mainPic.style.opacity = 1;
    }, 500); 
}

setInterval(nextPic, 5000);
