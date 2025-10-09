const mobileMenuButton = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('nav-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });