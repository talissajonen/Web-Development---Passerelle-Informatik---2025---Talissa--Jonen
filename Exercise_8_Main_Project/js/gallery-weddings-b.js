// Get main elements from the page
const gallery = document.getElementById('gallery'); // the gallery container
const lightbox = document.getElementById('lightbox'); // the overlay/lightbox
const lbImg = lightbox.querySelector('img'); // the image inside the lightbox
const closeBtn = lightbox.querySelector('.close'); // the close button
const prevBtn = lightbox.querySelector('.prev'); // the previous foto button
const nextBtn = lightbox.querySelector('.next'); // the next foto button

// List of image file paths
const photos = [
    '../gallery/WeddingB/photo1.jpg',
    '../gallery/WeddingB/photo2.jpg',
    '../gallery/WeddingB/photo3.jpg',
    '../gallery/WeddingB/photo4.jpg',
    '../gallery/WeddingB/photo5.jpg',
    '../gallery/WeddingB/photo6.jpg',
    '../gallery/WeddingB/photo7.jpg'
];
let currentIndex = 0;

// Function to open lightbox with clicked image
function openLightbox(index) {
    currentIndex = index;      // salva o índice
    lbImg.src = photos[index]; // mostra a foto
    lightbox.style.display = 'flex';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show next photo lightbox
function showNext() {
    currentIndex = (currentIndex + 1) % photos.length; 
    lbImg.src = photos[currentIndex];
}

// Function to show previous photo lightbox
function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    lbImg.src = photos[currentIndex];
}

// Fill gallery with images and add click events
photos.forEach((src, i) => {
    const img = document.createElement('img'); 
    img.src = src; 
    img.addEventListener('click', () => openLightbox(i)); 
    gallery.appendChild(img); 
});


// events lightbox

// Close lightbox when clicking X button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

// 
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);