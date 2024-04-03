document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const radioInputs = document.querySelectorAll(
    '.controls input[type="radio"]'
  );

  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  radioInputs.forEach((input, index) => {
    input.addEventListener("change", function () {
      stopSlider();
      currentIndex = index;
      showSlide(currentIndex);
      setTimeout(startSlider, 5000);
    });
  });

  startSlider();
});
