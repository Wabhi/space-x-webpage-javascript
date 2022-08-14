const btn = document.getElementById("menu-button");
const overLay = document.getElementById("overlay");
const showMenu = document.getElementById("mobile-menu");
btn.addEventListener("click", toogleMenu);

function toogleMenu() {
  btn.classList.toggle("open");
  overLay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  showMenu.classList.toggle("show-menu");
}
