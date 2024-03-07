const menuIcon = document.querySelector(".menu-icon");
const slideMenu = document.querySelector(".nav-list");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var headerContainer = document.querySelector(".header-container");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      headerContainer.classList.add("scrolled");
    } else {
      headerContainer.classList.remove("scrolled");
    }
  });
});

const slider = document.querySelector(".card-container");
const slides = document.querySelectorAll(".card");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentSlideIndex = 0;

function moveSlide(index) {
  debugger;
  slider.style.transform = `translateX(-${index * 100}%)`;  
  currentSlideIndex = index;
}

leftArrow.addEventListener("click", () => {
  debugger;
  const newIndex =
    currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  moveSlide(newIndex);
});

rightArrow.addEventListener("click", () => {
  const newIndex =
    currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
  moveSlide(newIndex);
});
