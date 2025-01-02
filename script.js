document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Clear the form
});
const toggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const toggleText = document.getElementById("toggle-text");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    toggleText.textContent = "Dark Mode";
} else {
    toggleText.textContent = "Light Mode";
}

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        body.classList.add("dark-mode");
        toggleText.textContent = "Dark Mode";
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        toggleText.textContent = "Light Mode";
        localStorage.setItem("theme", "light");
    }
});
