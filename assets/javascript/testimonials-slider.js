const radioButtons = document.querySelectorAll('.controls input[type="radio"]');
const slides = document.querySelectorAll(".carousel .carousel-slide");

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    slides.forEach((slide, slideIndex) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  });
});
