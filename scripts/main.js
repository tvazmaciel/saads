// Menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }
});

// Contagem regressiva (index.html)
function pad(num) {
    return num < 10 ? '0' + num : num;
}

function countdown() {
    // Data do início do evento: 2 de Julho de 2025, 19:15 GMT-3 (Brasília)
    const eventDate = new Date('2025-07-02T22:15:00Z'); // 19:15 GMT-3 == 22:15 UTC
    const now = new Date();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        if (document.getElementById('days')) {
            document.getElementById('days').textContent = pad(days);
            document.getElementById('hours').textContent = pad(hours);
            document.getElementById('minutes').textContent = pad(minutes);
            document.getElementById('seconds').textContent = pad(seconds);
        }
    } else {
        if (document.getElementById('countdown')) {
            document.getElementById('countdown').textContent = 'O evento já começou!';
        }
    }
}

if (document.getElementById('countdown')) {
    countdown();
    setInterval(countdown, 1000);
}