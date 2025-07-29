const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  backdrop.classList.toggle("show");
});

backdrop.addEventListener("click", () => {
  navLinks.classList.remove("show");
  backdrop.classList.remove("show");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show");
  backdrop.classList.remove("show");
});
