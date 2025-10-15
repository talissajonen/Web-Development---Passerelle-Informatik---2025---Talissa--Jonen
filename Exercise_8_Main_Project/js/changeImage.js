// Get main elements from the page
const mainPic = document.getElementById('mainPic');

// List of image file paths
const fotos = [
    '../gallery/WeddingA/photo1.jpg',
    '../gallery/WeddingA/photo2.jpg',
    '../gallery/WeddingA/photo3.jpg',
    '../gallery/WeddingA/photo4.jpg',
    '../gallery/WeddingA/photo5.jpg',
    '../gallery/WeddingA/photo6.jpg',
    '../gallery/WeddingA/photo7.jpg',
    '../gallery/WeddingA/photo8.jpg',
    '../gallery/WeddingA/photo9.jpg',
    '../gallery/WeddingB/photo1.jpg',
    '../gallery/WeddingB/photo2.jpg',
    '../gallery/WeddingB/photo3.jpg',
    '../gallery/WeddingB/photo4.jpg',
    '../gallery/WeddingB/photo5.jpg',
    '../gallery/WeddingB/photo6.jpg',
    '../gallery/WeddingB/photo7.jpg',
    '../gallery/WeddingC/photo1.jpg',
    '../gallery/WeddingC/photo2.jpg',
    '../gallery/WeddingC/photo3.jpg',
    '../gallery/WeddingC/photo4.jpg',
    '../gallery/WeddingC/photo5.jpg',
    '../gallery/WeddingC/photo6.jpg',
    '../gallery/WeddingC/photo7.jpg'
];

let count = 0; // Current image index - Keeps track of which photo is currently being shown.

// Change to the next image with fade effect
function nextPic() {
    mainPic.style.opacity = 0; // Fade out
    setTimeout(() => {
        count = (count + 1) % fotos.length; // Go to the next image; if we're at the last one, start over from the first
        mainPic.src = fotos[count]; // Update the main image to show the current photo
        mainPic.style.opacity = 1; // Fade in
    }, 500); // Delay of 0.5s for fade transition
}

// Change image every 5 seconds
setInterval(nextPic, 5000);
