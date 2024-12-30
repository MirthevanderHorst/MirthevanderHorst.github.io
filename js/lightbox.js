// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all image elements with the class "lightbox-trigger"
    const images = document.querySelectorAll('.lightbox-trigger');

    // Create the lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';  // Hidden by default
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '1000';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.display = 'flex';
    lightbox.style.overflow = 'hidden';
    lightbox.style.cursor = 'zoom-out';
    document.body.appendChild(lightbox);

    // Create an image element for the lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.style.maxWidth = '90%';
    lightboxImage.style.maxHeight = '90%';
    lightboxImage.style.objectFit = 'contain';
    lightbox.appendChild(lightboxImage);

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Loop through all images and add event listeners to open the lightbox
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImage.src = image.src;  // Set the lightbox image to the clicked image
            lightbox.style.display = 'flex';  // Show the lightbox
        });
    });
});
