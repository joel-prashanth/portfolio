const toggleBtn = document.getElementById("themeToggle");
const themeLink = document.getElementById("theme-style");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let currentTheme = savedTheme || (prefersDark ? "dark" : "light");

themeLink.setAttribute("href", `styles/${currentTheme}.css`);
toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";

//Theme toggle click event

toggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  themeLink.setAttribute("href", `styles/${currentTheme}.css`);
  toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", currentTheme);
});
