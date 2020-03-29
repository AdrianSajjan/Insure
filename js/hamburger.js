const hamburgerButton = document.querySelector(".nav__collapse");
const navLinks = document.querySelector(".nav__links");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("nav__collapse--close");
  navLinks.classList.toggle("nav__links--open");
});
