// Function to open the modal with the clicked image
const images = document.querySelectorAll('.image-gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
let currentIndex = 0; // Variable to track the currently displayed image

// Open modal and display clicked image
images.forEach((img, index) => {
    img.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        currentIndex = index; // Set current index when image is clicked
    });
});

// Close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside the image (on the background)
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Function to navigate through images using arrow keys
document.addEventListener('keydown', function (event) {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            // Show next imagep
            currentIndex = (currentIndex + 1) % images.length;
            modalImg.src = images[currentIndex].src;
        } else if (event.key === 'ArrowLeft') {
            // Show previous image
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImg.src = images[currentIndex].src;
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Add functionality to click on the enlarged image to go to the next/previous image
modalImg.addEventListener('click', function (event) {
    const clickX = event.offsetX; // Get the X coordinate of the click inside the image
    const imageWidth = modalImg.offsetWidth; // Get the width of the image

    // If clicked on the left half, go to the previous image
    if (clickX < imageWidth / 2) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        // If clicked on the right half, go to the next image
        currentIndex = (currentIndex + 1) % images.length;
    }

    modalImg.src = images[currentIndex].src; // Change the modal image source
});

const scrollContainer = document.getElementById('scroll-container');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

scrollLeft.addEventListener('click', () => {
    const left = scrollContainer.scrollLeft === 0 ? 1000000 : -500;
    scrollContainer.scrollBy({ left, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    const left = scrollContainer.offsetWidth + scrollContainer.scrollLeft >= scrollContainer.scrollWidth ? -1000000 : 500;
    scrollContainer.scrollBy({ left, behavior: 'smooth' });
});





// Get the button and the section
const button = document.querySelector('.jump-to-images-btn');
const imagesSection = document.querySelector('#images'); // Assuming #images is the section you're referring to

// Check the scroll position and adjust opacity of the button
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Current scroll position
    const imagesSectionPosition = imagesSection.offsetTop; // Position of #images section from the top of the page
    const sectionHeight = imagesSection.offsetHeight; // Height of the #images section

    // Start fading earlier (adjust this value for earlier fading)
    const fadeStart = imagesSectionPosition - 1000; // Start fading 300px before the section
    const fadeEnd = imagesSectionPosition - 600; // Make it fully invisible 300px before the section

    // If the scroll position is past the fadeStart, calculate opacity
    if (scrollPosition >= fadeStart && scrollPosition < fadeEnd) {
        // Calculate opacity: start fading when the user scrolls past fadeStart, until it reaches 0 at fadeEnd
        const opacity = 1 - ((scrollPosition - fadeStart) / 300); // Fade over 300px distance
        button.style.opacity = opacity; // Adjust opacity
    } else if (scrollPosition >= fadeEnd) {
        // Once the user has scrolled past the fadeEnd, the button will be fully transparent
        button.style.opacity = 0;
    } else {
        // Before the #images section starts, the button remains fully visible
        button.style.opacity = 1;
    }
});