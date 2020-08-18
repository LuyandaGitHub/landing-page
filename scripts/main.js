window.addEventListener('scroll', () => {
    const desktopNav = document.querySelector('.desktop-nav');
    desktopNav.classList.toggle('scrolled', window.scrollY + 0);

    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('scrolled', window.scrollY + 0);
})