window.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
})

window.addEventListener('scroll', () => {
    const desktopNav = document.querySelector('.desktop-nav');
    desktopNav.classList.toggle('scrolled', window.scrollY + 0);

    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('scrolled', window.scrollY + 0);

    if(desktopNav.classList.contains('scrolled') || mobileNav.classList.contains('scrolled')) {
        desktopNav.querySelector('.logo').src = 'images/zaio_blue_logo.png';
        mobileNav.querySelector('.logo').src = 'images/zaio_blue_logo.png';
    } else {
        desktopNav.querySelector('.logo').src = 'images/zaio_white_logo.png';
        mobileNav.querySelector('.logo').src = 'images/zaio_white_logo.png';
    }
})


document.querySelector('.menu-icon-container').addEventListener('click', () => {
    console.log('click');
    document.querySelector('.menu-icon-container').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
})
