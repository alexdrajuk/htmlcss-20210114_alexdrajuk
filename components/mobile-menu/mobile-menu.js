
const mobileMenu = document.querySelector('.mobile-menu');
const btnClose = mobileMenu.querySelector('.btn-close');
const btnOpen = document.querySelector('.js-btn-mobile-menu');

// Open
const openMobileMenu = (e) => {
    mobileMenu.classList.add('mobile-menu_opened');
}
btnOpen.addEventListener('click', openMobileMenu);

// Close
const closeMobileMenu = (e) => {
    mobileMenu.classList.remove('mobile-menu_opened');
};
btnClose.addEventListener('click', closeMobileMenu);
