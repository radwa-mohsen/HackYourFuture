const menuIcon = document.querySelector(".menu-icon");
const slideMenu = document.getElementById("slide-menu");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});