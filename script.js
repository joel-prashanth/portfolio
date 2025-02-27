// Toggle Sidebar Menu
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

// Toggle Light/Dark Mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        document.querySelector(".theme-toggle").textContent = "☀️"; // Change to sun icon
    } else {
        localStorage.setItem("theme", "light");
        document.querySelector(".theme-toggle").textContent = "🌙"; // Change to moon icon
    }
}

// Apply saved theme on page load
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle").textContent = "☀️";
    }
};
