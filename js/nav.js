/* JavaScript for handling the navigation menu toggle on mobile devices */
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.site-header__toggle');

if (header && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}