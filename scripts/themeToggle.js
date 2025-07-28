const toggleBtn = document.getElementById("themeToggle");
const themeLink = document.getElementById("theme-style");

toggleBtn.addEventListener("click", () => {
  const current = themeLink.getAttribute("href");
  const newTheme = current.includes("dark") ? "light" : "dark";
  themeLink.setAttribute("href", `styles/${newTheme}.css`);
  toggleBtn.textContent = newTheme === "dark" ? " ☀️" : "🌙";
});
