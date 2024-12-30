// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all image elements with the class "lightbox-trigger"
    const images = document.querySelectorAll('.lightbox-trigger');

    // Create the lightbox container
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-img');

    // Close the lightbox when clicking on the close button
    document.querySelector('.close').addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Loop through all images and add event listeners to open the lightbox
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImage.src = image.src;  // Set the lightbox image to the clicked image
            lightbox.style.display = 'flex';  // Show the lightbox
        });
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
