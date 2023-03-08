function activeSlides(activeSlade = 3) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlade].classList.add("active");

  for (let slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

activeSlides();
