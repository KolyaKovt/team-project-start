(() => {
  const refs = {
    openMenuBtn: document.querySelector("#mobile-menu-open"),
    closeMenuBtn: document.querySelector("#mobile-menu-close"),
    menu: document.querySelector("#mobile-menu-container"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
