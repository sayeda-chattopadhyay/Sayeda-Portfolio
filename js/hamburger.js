const sideNavMenu = document.querySelector("#side-nav-menu");
console.log(sideNavMenu);

const close = document.querySelector(".close");
console.log(close);

const menu = document.querySelector(".menu");
console.log(menu);

menu.addEventListener("click", () => {
  sideNavMenu.style.right = "0";
});

close.addEventListener("click", () => {
  sideNavMenu.style.right = "-200px";
});
