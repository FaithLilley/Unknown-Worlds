/* JavaScript for handling the navigation menu toggle on mobile devices */
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.site-header__toggle');

if (header && toggle) {
  const setMenuState = (isOpen) => {
    header.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', isOpen);
  };

  toggle.addEventListener('click', () => {
    const isOpen = !header.classList.contains('menu-open');
    setMenuState(isOpen);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      setMenuState(false);
    }
  });
}
