const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const getSliderIndicator1 = document.querySelector(".indicator-1");
const getSliderIndicator2 = document.querySelector(".indicator-2");

lefts();
rights();

function lefts() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active");
    slider1.classList.add("slider-not-active");
    slider2.classList.remove("slider-not-active");
    slider2.classList.add("slider-active");
    getSliderIndicator2.classList.remove("slider-indicator-active");
    getSliderIndicator2.classList.add("slider-indicator");
    getSliderIndicator1.classList.remove("slider-indicator");
    getSliderIndicator1.classList.add("slider-indicator-active");
  } else if (checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active");
    slider2.classList.add("slider-not-active");
    slider1.classList.remove("slider-not-active");
    slider1.classList.add("slider-active");
    getSliderIndicator1.classList.remove("slider-indicator-active");
    getSliderIndicator1.classList.add("slider-indicator");
    getSliderIndicator2.classList.remove("slider-indicator");
    getSliderIndicator2.classList.add("slider-indicator-active");
  }
}

function rights() {
  const checkSlider1 = slider1.classList.contains("slider-active");
  const checkSlider2 = slider2.classList.contains("slider-active");
  const getSliderIndicator1 = document.querySelector(".indicator-1");
  const getSliderIndicator2 = document.querySelector(".indicator-2");
  if (checkSlider1 === true || checkSlider2 === false) {
    slider1.classList.remove("slider-active");
    slider1.classList.add("slider-not-active");
    slider2.classList.remove("slider-not-active");
    slider2.classList.add("slider-active");
    getSliderIndicator2.classList.remove("slider-indicator-active");
    getSliderIndicator2.classList.add("slider-indicator");
    getSliderIndicator1.classList.remove("slider-indicator");
    getSliderIndicator1.classList.add("slider-indicator-active");
  } else if (checkSlider1 === false || checkSlider2 === true) {
    slider2.classList.remove("slider-active");
    slider2.classList.add("slider-not-active");
    slider1.classList.remove("slider-not-active");
    slider1.classList.add("slider-active");
    getSliderIndicator1.classList.remove("slider-indicator-active");
    getSliderIndicator1.classList.add("slider-indicator");
    getSliderIndicator2.classList.remove("slider-indicator");
    getSliderIndicator2.classList.add("slider-indicator-active");
  }
}
