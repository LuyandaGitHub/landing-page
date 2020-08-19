// INITIALISE AOS FOR THE FADE IN ANIMATIONS 
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
})

// TOGGLE THE .scrolled CLASS ON THE desktopNav AND mobileNav
window.addEventListener('scroll', () => {
    const desktopNav = document.querySelector('.desktop-nav');
    desktopNav.classList.toggle('scrolled', window.scrollY + 0);

    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('scrolled', window.scrollY + 0);

    // CHANGE THE IMAGE TO THE APPROPRIATE ONE DEPENDDING ON THE desktopNav AND mobileNav STATES
    if(desktopNav.classList.contains('scrolled') || mobileNav.classList.contains('scrolled')) {
        desktopNav.querySelector('.logo').src = 'images/zaio_blue_logo.png';
        mobileNav.querySelector('.logo').src = 'images/zaio_blue_logo.png';
    } else {
        desktopNav.querySelector('.logo').src = 'images/zaio_white_logo.png';
        mobileNav.querySelector('.logo').src = 'images/zaio_white_logo.png';
    }
})

// TOGGLE THE .active CLASS ON THE MENU ICON AND THE MOBILE MENU
document.querySelector('.menu-icon-container').addEventListener('click', () => {
    document.querySelector('.menu-icon-container').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
})

// CREATE AN ARRAY OF navLinks TO TOGGLE THE .active CLASS ON THE MENU ICON AND THE MOBILE MENU
const navLinks = document.querySelectorAll('.mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-icon-container').classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
    })
})