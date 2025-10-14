// Get main elements from the page
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev'); // the previous foto button
const nextBtn = lightbox.querySelector('.next'); // the next foto button

// List of image file paths
const fotos = [
    '../gallery/WeddingC/photo1.jpg',
    '../gallery/WeddingC/photo2.jpg',
    '../gallery/WeddingC/photo3.jpg',
    '../gallery/WeddingC/photo4.jpg',
    '../gallery/WeddingC/photo5.jpg',
    '../gallery/WeddingC/photo6.jpg',
    '../gallery/WeddingC/photo7.jpg'
];

// Create an <img> for each photo and add it to the gallery
fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);


    // Open lightbox when clicked
    img.addEventListener('click', () => {
        lbImg.src = src;
        lightbox.style.display = 'flex';
    });
});

// Close when click on "x"
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close when clicked out of the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});