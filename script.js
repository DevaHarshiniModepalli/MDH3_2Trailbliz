function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    message.textContent = "Thank you! Your message has been sent.";
    form.reset();
});
