// Get main elements from the page
const gallery = document.getElementById('gallery'); // the gallery container
const lightbox = document.getElementById('lightbox'); // the overlay/lightbox
const lbImg = lightbox.querySelector('img'); // the image inside the lightbox
const closeBtn = lightbox.querySelector('.close'); // the close button
const prevBtn = lightbox.querySelector('.prev'); // the previous foto button
const nextBtn = lightbox.querySelector('.next'); // the next foto button

// List of image file paths
const photos = [
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

// Keep track of the currently displayed image index
let currentIndex = 0;

// Function to open lightbox with clicked image
function openLightbox(index) {
    currentIndex = index;      // Save the index of the clicked image
    lbImg.src = photos[index]; // Update the lightbox image source
    lightbox.style.display = 'flex'; // Show the lightbox overlay
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show the next photo in the lightbox
function showNext() {
    currentIndex = (currentIndex + 1) % photos.length; // Move to next image
    lbImg.src = photos[currentIndex];  // Update lightbox image
}

// Function to show the previous photo in the lightbox
function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    lbImg.src = photos[currentIndex];
}

// Fill gallery with images and add click events
photos.forEach((src, i) => {
    const img = document.createElement('img');  // Create a new img element
    img.src = src; // Set its source
    img.addEventListener('click', () => openLightbox(i)); // Open lightbox when clicked
    gallery.appendChild(img); // Add image to the gallery container
});


// events lightbox

// Close lightbox when clicking the X button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});

// Navigate to previous/next images
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);