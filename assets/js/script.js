'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

// Filter JS

$(document).ready(function(){
  $(".filter-item").click(function(){
      const value = $(this).attr("data-filter")
      if (value == "all") {
          $(".project-card").show("1000")
      }
      else{
          $(".project-card").not("." + value).hide("1000")
          $(".project-card").filter("." + value).show("1000");     
      }
  });
  // Add active to btn
  $(".filter-item").click(function(){
      $(this).addClass("active-filter").siblings().removeClass("active-filter");
  })
});

// const openNav = document.querySelector(".open-btn");
// const closeNav = document.querySelector(".close-btn");
// const menu = document.querySelector(".drop-menu2");

// openNav.addEventListener("click", () => {
//   menu.classList.add("show");
// });

// closeNav.addEventListener("click", () => {
//   menu.classList.remove("show");
// });