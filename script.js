document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("darkModeBtn");

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            btn.title = "Mode clair";
        } else {
            btn.title = "Mode sombre";
        }
    });

    // SCROLL
    const reveals = document.querySelectorAll(".reveal");

    function reveal() {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 80) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    // ✅ CONTACT WHATSAPP (FIX)
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Veuillez remplir tous les champs");
            return;
        }

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

});