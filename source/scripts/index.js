const slides = document.querySelectorAll('.hero__slide');
const bars = document.querySelectorAll('.hero__slider-bar');
const nextButton = document.querySelector('.hero__slider-buttonnext');
const prevButton = document.querySelector('.hero__slider-buttonprev');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('hero__slide--active'));
  bars.forEach(bar => bar.classList.remove('hero__slider-bar--active'));

  slides[index].classList.add('hero__slide--active');
  bars[index].classList.add('hero__slider-bar--active');
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

bars.forEach((bar, index) => {
  bar.addEventListener('click', () => {
    currentIndex = index;
    showSlide(index);
  });
});
