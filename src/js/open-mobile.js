(() => {
  const refs = {
    openMenuBtn: document.querySelector("#mobile-menu-open"),
    closeMenuBtn: document.querySelector("#mobile-menu-close"),
    menu: document.querySelector("#mobile-menu-container"),
    navLinks: document.querySelectorAll(".page-nav-link"),
  };

  refs.openMenuBtn.addEventListener("click", openMenu);
  refs.closeMenuBtn.addEventListener("click", closeMenu);
  refs.navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
  }

  function openMenu() {
    refs.menu.classList.remove("is-hidden");
  }
})();
