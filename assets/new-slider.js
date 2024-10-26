// Initial Dots
var count = document.querySelector(".slides").childElementCount;
console.log(count);
for (var i = 0; i < count; i++) {
document.querySelector(".dots").innerHTML += `<span class="dot"></span>`;

}
// JavaScript for slider functionality
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

// Function to update slider position
function updateSlider() {
slides.style.transform = `translateX(-${currentIndex * 100}%)`;
dots.forEach((dot, index) => {
dot.classList.toggle('active', index === currentIndex);
});

}

// Function to show next slide
function showNextSlide() {
currentIndex = (currentIndex + 1) % slide.length;
updateSlider();
}

// Function to show previous slide
function showPrevSlide() {
currentIndex = (currentIndex - 1 + slide.length) % slide.length;
updateSlider();
}

// Event listeners for arrows
rightArrow.addEventListener('click', showNextSlide);
leftArrow.addEventListener('click', showPrevSlide);

// Event listeners for dots
dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentIndex = index;
updateSlider();
});
});

// Auto slide functionality
// setInterval(showNextSlide, 3000);