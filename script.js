
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for the Back to Top link
    const backToTop = document.querySelector('a[href="#top"]');

    if (backToTop) {
        backToTop.addEventListener("click", (event) => {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Update the footer with the current year
    const footer = document.querySelector("footer");

    if (footer) {
        const yearText = document.createElement("p");
        yearText.textContent = `Website created in ${new Date().getFullYear()}`;
        footer.appendChild(yearText);
    }

    // Reveal sections as they enter the viewport
    const sections = document.querySelectorAll(
        ".intro, .timeline-section, .values-section, .closing-section"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        sections.forEach((section) => {
            section.classList.add("reveal");
            observer.observe(section);
        });
    }
});
