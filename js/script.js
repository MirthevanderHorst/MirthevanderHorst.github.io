// Function to open the modal with the clicked image
const image = document.getElementById('about-image');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
let currentIndex = 0;

// Open the modal when the image is clicked
image.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modalImg.src = this.src;
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
    const clickX = event.offsetX;
    const imageWidth = modalImg.offsetWidth;

    // If clicked on the left half, go to the previous image
    if (clickX < imageWidth / 2) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        // If clicked on the right half, go to the next image
        currentIndex = (currentIndex + 1) % images.length;
    }

    modalImg.src = images[currentIndex].src;
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