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
// function updateLink() {
//     const headerLink = document.getElementById('header-link');
//     const screenWidth = window.innerWidth;

//     if (screenWidth < 750) {
//         headerLink.href = "#images";
//     } else {
//         headerLink.href = "index.html#home";
//     }
// }

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

// Make extra images button work in right position
document.addEventListener('scroll', handleScroll);

const buttonContainer = document.querySelector('.scroll-button-container');
const gallery = document.getElementById('new-images');
const materialsSection = document.getElementById('materials');

function handleScroll() {
    if (gallery.style.display === 'block') {
        const galleryBottom = gallery.offsetTop + gallery.offsetHeight;
        const materialsTop = materialsSection.offsetTop;
        const buttonHeight = buttonContainer.offsetHeight;

        if (window.scrollY + buttonHeight >= materialsTop) {
            // Fix the button above the materials section
            buttonContainer.style.position = 'absolute';
            buttonContainer.style.top = `${materialsTop - buttonHeight}px`;
            buttonContainer.classList.add('fixed');
            buttonContainer.classList.remove('sticky');
        } else if (window.scrollY >= galleryBottom - buttonHeight) {
            // Fix the button just below the gallery
            buttonContainer.style.position = 'absolute';
            buttonContainer.style.top = `${galleryBottom}px`;
            buttonContainer.classList.add('fixed');
            buttonContainer.classList.remove('sticky');
        } else {
            // Make it sticky when scrolling within the gallery area
            buttonContainer.style.position = 'sticky';
            buttonContainer.style.top = '65px';
            buttonContainer.classList.add('sticky');
            buttonContainer.classList.remove('fixed');
        }
    } else {
        // Reset position when gallery is hidden
        buttonContainer.style.position = 'relative';
        buttonContainer.style.top = 'auto';
        buttonContainer.classList.remove('fixed', 'sticky');
    }
}

// Make extra image button show correctly
function toggleGallery() {
    const toggleButton = document.getElementById('show-gallery-btn');
    const extraImageText = document.getElementById('extra-image-text');

    if (gallery.style.display === 'none' || gallery.style.display === '') {
        gallery.style.display = 'block';
        toggleButton.textContent = 'Hide AI Generated Images';
        handleScroll();
    } else {
        gallery.style.display = 'none';
        toggleButton.textContent = 'Show AI Generated Images';
        buttonContainer.style.position = 'relative';
        buttonContainer.style.top = 'auto';
        buttonContainer.classList.remove('fixed', 'sticky');

        extraImageText.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
