let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.display = "none"; // Hide all slides
    });

    slides[slideIndex].classList.add('active');
    slides[slideIndex].style.display = "block"; // Show the active slide
}

function moveSlide(step) {
    currentSlide += step;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    showSlide(currentSlide);
}

// Initialize the carousel by showing the first slide
showSlide(currentSlide);


function showNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}