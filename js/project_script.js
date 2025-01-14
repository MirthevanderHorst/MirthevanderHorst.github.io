// Function to open the enlarged image
const images = document.querySelectorAll('.image-gallery img, .new-image-gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        currentIndex = index;
    });
});

function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside the image (on the background)
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Navigate through images using arrow keys
document.addEventListener('keydown', function (event) {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            modalImg.src = images[currentIndex].src;
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImg.src = images[currentIndex].src;
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Go to next enlarged image by clicking on it
modalImg.addEventListener('click', function (event) {
    const clickX = event.offsetX;
    const imageWidth = modalImg.offsetWidth;

    if (clickX < imageWidth / 2) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        currentIndex = (currentIndex + 1) % images.length;
    }
    modalImg.src = images[currentIndex].src;
});

// Scroll bar for other projects
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

// Header link based on screen size
function updateLink() {
    const headerLink = document.getElementById('header-link');
    const screenWidth = window.innerWidth;

    if (screenWidth < 750) {
        headerLink.href = "#images";
    } else {
        headerLink.href = "index.html#home";
    }
}

window.addEventListener('load', updateLink);
window.addEventListener('resize', updateLink);


// Button to quickly navigate to images section
const button = document.querySelector('.jump-to-images-btn');
const imagesSection = document.querySelector('#images');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const imagesSectionPosition = imagesSection.offsetTop;
    const sectionHeight = imagesSection.offsetHeight;

    const fadeStart = imagesSectionPosition - 1000;
    const fadeEnd = imagesSectionPosition - 600;

    if (scrollPosition >= fadeStart && scrollPosition < fadeEnd) {
        const opacity = 1 - ((scrollPosition - fadeStart) / 300);
        button.style.opacity = opacity;
    } else if (scrollPosition >= fadeEnd) {
        button.style.opacity = 0;
    } else {
        button.style.opacity = 1;
    }
});

// Function to toggle the visibility of AI gallery
function toggleGallery() {
    const gallery = document.getElementById('new-images');
    const button = document.getElementById('show-gallery-btn');
    
    if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'block';  // Show the gallery
        button.textContent = 'Hide AI Generated Images';  // Change button text to 'Hide'
    } else {
        gallery.style.display = 'none';  // Hide the gallery
        button.textContent = 'Show AI Generated Images';  // Reset button text
    }
}