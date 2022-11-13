const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

toggleMenu.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", function () {
  navMenu.classList.remove("show");
});

const linkAction = () => {
  navMenu.classList.remove("show");
};

navLink.forEach(nav => nav.addEventListener("click", linkAction))

const mode = document.querySelector(".mode img");

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    mode.setAttribute("src", "images/day.png");
  }else{
    mode.setAttribute("src", "images/night.png");
  }
})

