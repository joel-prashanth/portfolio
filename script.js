function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("show");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const themeToggleBtn = document.querySelector(".theme-toggle");

  // Toggle icon based on theme
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.innerHTML = "☀️"; // Sun for light mode
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleBtn.innerHTML = "🌙"; // Moon for dark mode
    localStorage.setItem("theme", "light");
  }
}

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Initialize the typing animation after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typing-text", {
    strings: ["Fullstack Developer", "Embedded Engineer", "UI/UX Designer"],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 1600,
    loop: true,
  });

  // Smooth scrolling for all scroll-link elements
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
