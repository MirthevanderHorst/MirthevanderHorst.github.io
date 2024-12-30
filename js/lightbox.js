// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all image elements with the class "lightbox-trigger"
    const images = document.querySelectorAll('.lightbox-trigger');

    // Get the lightbox element and the image inside it
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Add event listener to close the lightbox when clicking on the close button
    const closeButton = lightbox.querySelector('.close');
    closeButton.addEventListener('click', closeLightbox);

    // Loop through all images and add event listeners to open the lightbox
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImage.src = image.src;  // Set the lightbox image to the clicked image
            lightbox.style.display = 'flex';  // Show the lightbox
        });
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});
