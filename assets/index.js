// Mobile Menu
const mobileMenu = document.getElementById("mobile-menu");
const mobileSlide = document.getElementById("mobile-slide");
const mobileSlideClose = document.getElementById("mobile-slide-close");

mobileMenu.addEventListener("click", () => {
  mobileSlide.style.right = "0px";
});

mobileSlideClose.addEventListener("click", () => {
  mobileSlide.style.right = "-100%";
});