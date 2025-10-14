// Get main elements from the page
const mainPic = document.getElementById('mainPic');

// List of image file paths
const fotos = [
    '../gallery/WeddingA/photo1.jpg',
    '../gallery/WeddingA/photo2.jpg',
    '../gallery/WeddingA/photo3.jpg',
    '../gallery/WeddingA/photo4.jpg',
    '../gallery/WeddingA/photo5.jpg'
];

let count = 0; // Current image index - Keeps track of which photo is currently being shown. 0 means the first one in the list (photo1.jpg). Then it will go to 1, 2, and so on.

// Change to the next image with fade effect
function nextPic() {
    mainPic.style.opacity = 0; // Fade out
    setTimeout(() => {
        count = (count + 1) % fotos.length; // Move to next image, loop back to start
        mainPic.src = fotos[count]; // Update image source
        mainPic.style.opacity = 1; // Fade in
    }, 500); // Delay for fade transition
}

// Change image every 5 seconds
setInterval(nextPic, 5000);
