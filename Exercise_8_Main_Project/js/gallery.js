// Get DOM elements
const gallery = document.getElementById('gallery'); // the gallery container
const lightbox = document.getElementById('lightbox'); // the overlay/lightbox
const lbImg = lightbox.querySelector('img'); // the image inside the lightbox
const closeBtn = lightbox.querySelector('.close'); // the close button

// Array of photo URLs
const photos = [
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

// Function to open lightbox with clicked image
function openLightbox(src) {
    lbImg.src = src;
    lightbox.style.display = 'flex';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Fill gallery with images and add click events
photos.forEach(src => {
    const img = document.createElement('img'); // create image element
    img.src = src; // set image source
    img.addEventListener('click', () => openLightbox(src)); // click opens lightbox
    gallery.appendChild(img); // add image to gallery
});

// Close lightbox when clicking X button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});