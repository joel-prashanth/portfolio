document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxDesc = document.getElementById("lightbox-desc");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;

    // Add lazy loading to images
    galleryItems.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Open Lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = item.src;
            lightboxDesc.textContent = item.getAttribute("data-description");
            lightboxImg.classList.add("fade-in");
            currentIndex = index;
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close when clicking outside
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Navigate Images
    prevBtn.addEventListener("click", () => navigate(-1));
    nextBtn.addEventListener("click", () => navigate(1));

    function navigate(direction) {
        lightboxImg.classList.remove("fade-in");
        lightboxImg.classList.add("fade-out");

        setTimeout(() => {
            currentIndex += direction;
            if (currentIndex < 0) currentIndex = galleryItems.length - 1;
            if (currentIndex >= galleryItems.length) currentIndex = 0;
            lightboxImg.src = galleryItems[currentIndex].src;
            lightboxDesc.textContent = galleryItems[currentIndex].getAttribute("data-description");
            lightboxImg.classList.remove("fade-out");
            lightboxImg.classList.add("fade-in");
        }, 300);
    }

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "ArrowRight") navigate(1);
            if (e.key === "Escape") lightbox.style.display = "none";
        }
    });
});
