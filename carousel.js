// JavaScript for Carousel with Sliding Transition
const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 5000); // Change image every 5 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
    startAutoSlide();
});

nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    startAutoSlide();
});

// Initialize carousel
updateCarousel();
startAutoSlide();