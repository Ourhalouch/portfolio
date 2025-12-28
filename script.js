document.addEventListener("DOMContentLoaded", () => {

    const darkBtn = document.getElementById("darkModeBtn");
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const phone = "2126XXXXXXXX"; // ⚠️ TON NUMÉRO

        const text =
            `Bonjour Mustapha\n\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    });

});
// ANIMATION AU SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
