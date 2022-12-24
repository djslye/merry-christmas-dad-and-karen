var slideshow = document.querySelector('.slideshow');
var images = slideshow.querySelectorAll('img');
var currentIndex = 0;
var slideInterval = setInterval(nextSlide, 3000);
function nextSlide() {
  images[currentIndex].style.left = '-100%';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.left = '0';
}
