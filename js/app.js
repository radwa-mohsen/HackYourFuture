// constants

const menuIcon = document.querySelector(".menu-icon");
const slideMenu = document.querySelector(".nav-list");
const closeIcon = document.querySelector(".close-icon");
const headerContainer = document.querySelector(".header-container");
const modalContent = document.getElementById("modal-content");
const myModal = document.getElementById("myModal");
const eventCards = document.querySelectorAll(".dives-section .card");
const memberCards = document.querySelectorAll(".members-section .card");
const scrollTopButton = document.getElementById("scrollTopBtn");

// functions

const openModal = (content) => {
  modalContent.innerHTML = content;
  myModal.style.display = "block";
};

const closeModal = () => {
  myModal.style.display = "none";
};

const scrollToTop = () => {
  const scrollStep = -window.scrollY / (500 / 15);

  function scroll() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
};

//listeners

menuIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", function () {
  slideMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
});

const getEventCardContent = (index) =>
  document.getElementById(`card-event${index}`).innerHTML;

const getMemberCardContent = (index) =>
  document.getElementById(`card-member${index}`).innerHTML;

eventCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const cardContent = getEventCardContent(index + 1);
    openModal(cardContent);
  });
});

memberCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const cardContent = getMemberCardContent(index + 1);
    openModal(cardContent);
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "flex";
  } else {
    scrollTopButton.style.display = "none";
  }
};
