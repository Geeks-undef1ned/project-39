let button = document.querySelector(".mobile-btn");

const toggleBurger = (menuClass, showClass) => {
  let menu = document.querySelector(`.${menuClass}`);

  if (menu.className.includes(showClass)) {
    menu.className = menuClass;
  } else {
    menu.className += ` ${showClass}`;
  }
};

button.addEventListener("click", () => {
  toggleBurger("header-menu", "header-menu-show");
});
