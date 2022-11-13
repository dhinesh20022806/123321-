"use strict";
const hamburgerIcon = document.querySelector(
  "#nav-bar .nav-bar .nav-list .hamburger"
);
const navList = document.querySelector("#nav-bar .nav-bar .nav-list");
const nabListClick1 = document.querySelector(
  "#nav-bar .nav-bar .nav-list .sevices_click"
);
const nabListClick2 = document.querySelector(".services_click2");
const nabListClick3 = document.querySelector(".services_click3");

const click = function () {
  navList.classList.toggle("open");
  hamburgerIcon.classList.toggle("active");
};
hamburgerIcon.addEventListener("click", () => {
  click();
});

nabListClick1.addEventListener("click", () => {
  click();
});
nabListClick2.addEventListener("click", () => {
  click();
});
nabListClick3.addEventListener("click", () => {
  click();
});
