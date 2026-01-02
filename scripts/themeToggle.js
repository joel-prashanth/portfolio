document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const html = document.documentElement;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  const isDarkOnLoad = savedTheme === "dark";

  if (isDarkOnLoad) {
    html.classList.add("dark");
  }

  // Set correct icon on load
  toggle.textContent = isDarkOnLoad ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update icon
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
});
