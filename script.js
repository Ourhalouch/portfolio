document.addEventListener("DOMContentLoaded", () => {

    /* ===== MODE SOMBRE ===== */
    const darkBtn = document.getElementById("darkModeBtn");
    if (darkBtn) {
        darkBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

    /* ===== FORMULAIRE CONTACT → WHATSAPP ===== */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            // ⚠️ Numéro WhatsApp (sans +, sans espaces)
            const phone = "212620443194";

            const text =
`Bonjour Mustapha 👋

Nom : ${name}
Email : ${email}

Message :
${message}`;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        });
    }

    /* ===== ANIMATION AU SCROLL ===== */
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

});
