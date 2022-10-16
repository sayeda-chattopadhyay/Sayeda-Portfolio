const menu = document.querySelector("#menu");
const close = document.querySelector(".close");
const nav = document.querySelector("#main-nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

// To hide the side nav menu after reaching to a particular section of the page

document.body.addEventListener("click", function (event) {
  console.dir(event.target);
  if (event.target.id !== "menu" && event.target.id !== "open-menu") {
    nav.classList.remove("open-nav");
  }
});
