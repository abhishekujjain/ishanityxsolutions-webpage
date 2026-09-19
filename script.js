(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector("#primary-nav");
  var navLinks = document.querySelectorAll(".primary-nav a, .footer-links a");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      primaryNav.classList.toggle("is-open", !expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        primaryNav.classList.remove("is-open");
      });
    });
  }

  var form = document.querySelector(".contact-form");
  var formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      formStatus.hidden = false;
      form.reset();
      formStatus.focus();
    });
  }

  var year = new Date().getFullYear();
  var timeEl = document.querySelector("footer time");
  if (timeEl) {
    timeEl.textContent = String(year);
    timeEl.setAttribute("datetime", String(year));
  }
})();
