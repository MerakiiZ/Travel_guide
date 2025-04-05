const mobileMenu = document.getElementById('mobile-menu');
const navbarContainer = document.querySelector('.navbar-container');

mobileMenu.addEventListener('click', () => {
    navbarContainer.classList.toggle('active');
});

 