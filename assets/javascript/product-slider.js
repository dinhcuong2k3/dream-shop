let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].offsetWidth;
  const slider = document.querySelector(".slider");

  slideIndex += direction;

  if (slideIndex < 0) {
    slideIndex = slides.length - 5;
  } else if (slideIndex >= slides.length || slideIndex === 10) {
    slideIndex = 0;
  }

  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
