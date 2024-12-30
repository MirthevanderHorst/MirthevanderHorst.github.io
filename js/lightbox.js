// Open lightbox with clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Add click event listeners to all images in the gallery
document.querySelectorAll('.image-gallery img').forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src);
    });
});

// Close lightbox when clicking on the overlay
document.getElementById('lightbox').addEventListener('click', closeLightbox);
