const menu = document.getElementById("navLinks");
const openBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("closeMenu");
const backdrop = document.getElementById("navBackdrop");

function openMenu() {
  menu.classList.remove("translate-x-full");
  backdrop.classList.remove("hidden");
}

function closeMenu() {
  menu.classList.add("translate-x-full");
  backdrop.classList.add("hidden");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
