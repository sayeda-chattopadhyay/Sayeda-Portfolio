// const sideNavMenu = document.querySelector("#side-nav-menu");
// console.log(sideNavMenu);

// const close = document.querySelector(".close");
// console.log(close);

// const menu = document.querySelector(".menu");
// console.log(menu);

// menu.addEventListener("click", () => {
//   sideNavMenu.style.right = "0";
// });

// close.addEventListener("click", () => {
//   sideNavMenu.style.right = "-200px";
// });

// new code

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("#main-nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

//teacher´s code

document.body.addEventListener("click", function (event) {
  console.dir(event.target);
  if (event.target.id !== "side-nav-menu" && event.target.id !== "open-menu") {
    sideNavMenu.style.right = "-200px";
  }
});
