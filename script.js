document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    const links = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.services .card');

    // Check for saved mode in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
        toggleSwitch.checked = true;
    } else {
        enableLightMode();
    }

    // Add event listener for toggle switch
    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            enableDarkMode();
            localStorage.setItem('theme', 'dark');
        } else {
            enableLightMode();
            localStorage.setItem('theme', 'light');
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        footer.classList.add('dark-mode');
        footer.classList.remove('light-mode');
        links.forEach(link => {
            link.classList.add('dark-mode-link');
            link.classList.remove('light-mode-link');
        });
        cards.forEach(card => {
            card.classList.add('dark-mode');
            card.classList.remove('light-mode');
        });
    }

    function enableLightMode() {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        navbar.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
        footer.classList.add('light-mode');
        footer.classList.remove('dark-mode');
        links.forEach(link => {
            link.classList.add('light-mode-link');
            link.classList.remove('dark-mode-link');
        });
        cards.forEach(card => {
            card.classList.add('light-mode');
            card.classList.remove('dark-mode');
        });
    }
});
