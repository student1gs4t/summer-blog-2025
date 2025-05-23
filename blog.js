const PASSWORD = "UniversitySummer2025";

document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        validatePass();
    }
});

function validatePass() {
    const login = document.getElementById('password');
    const msg = document.getElementById('message');

    if (login.value === PASSWORD) {
        document.querySelectorAll('.hidden').forEach(entry => {entry.style.display = 'flex';});
        msg.textContent = 'Password confirmed. See hidden entries below.'
    } else {
        document.querySelectorAll('.hidden').forEach(entry => {entry.style.display = 'none';});
        msg.textContent = 'Password denied. Try again.'
    }

    login.value = '';
}