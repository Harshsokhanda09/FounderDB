// ------------------------------
// DOM ELEMENTS
// ------------------------------
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// ------------------------------
// MENU TOGGLE HANDLERS
// ------------------------------
const toggleMenu = () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
};

const closeMenu = () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
};

// Event Listeners
menuBtn.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", closeMenu);

// ------------------------------
// SCROLL REVEAL CONFIG + HELPERS
// ------------------------------
const sr = ScrollReveal({
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-out",
});

const reveal = (selector, options = {}) => {
  sr.reveal(selector, { ...options });
};

// ------------------------------
// REVEAL ANIMATIONS
// ------------------------------
reveal(".header__content h1");
reveal(".header__content .section__description", { delay: 500 });
reveal(".header__btns", { delay: 1000 });

reveal(".service__card", { interval: 300 });
reveal(".service__btn", { delay: 1500 });

reveal(".about__container .section__header");
reveal(".about__list li", { delay: 400, interval: 300 });

reveal(".portfolio__container .section__header");
reveal(".portfolio__container .section__description", { delay: 400 });
reveal(".portfolio__image", { origin: "right", delay: 800 });
reveal(".portfolio__list li", { delay: 1200, interval: 300 });

reveal(".subscribe__content .section__header");
reveal(".subscribe__content form", { delay: 500 });

// ------------------------------
// SWIPER
// ------------------------------
new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
