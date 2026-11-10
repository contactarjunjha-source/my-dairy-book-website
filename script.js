/* My Dairy Book — one-page website interactions */
(function () {
  "use strict";

  var CONTACT_EMAIL = "mydairybook01@gmail.com";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function closeMenu() {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    mobileNav.classList.remove("open");
    mobileNav.hidden = true;
  }

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      mobileNav.classList.toggle("open", !open);
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  function revealAll() {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  function revealInView() {
    revealItems.forEach(function (item) {
      if (item.classList.contains("is-visible")) return;
      var r = item.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) item.classList.add("is-visible");
    });
  }

  revealInView();
  window.addEventListener("load", revealInView);

  if ("IntersectionObserver" in window) {
    var ioFired = false;
    var observer = new IntersectionObserver(
      function (entries) {
        ioFired = true;
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealItems.forEach(function (item) { observer.observe(item); });

    // Safety net: if the observer never runs (old WebView, suspended tab,
    // script conflict), show everything instead of leaving the page blank.
    window.setTimeout(function () {
      if (!ioFired) revealAll();
    }, 2500);
  } else {
    revealAll();
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("back-to-top");

  function onScroll() {
    if (!backToTop) return;
    backToTop.hidden = window.scrollY < 700;
  }

  if (backToTop) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Contact form → email app ---------- */
  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = (document.getElementById("name") || {}).value || "";
      var phone = (document.getElementById("phone") || {}).value || "";
      var subject = (document.getElementById("subject") || {}).value || "App support";
      var message = (document.getElementById("message") || {}).value || "";

      var bodyLines = [
        "Name: " + name,
        "Registered mobile: " + phone,
        "",
        message,
        "",
        "— Sent from the My Dairy Book website"
      ];

      var mailto =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent("[My Dairy Book] " + subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }

  /* ---------- Highlight the section in view (nav) ---------- */
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id], article[id]")
  );
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.desktop-nav a[href^="#"]')
  );

  function setActiveLink() {
    var current = null;
    var fromTop = window.scrollY + 140;

    sections.forEach(function (section) {
      if (section.offsetTop <= fromTop) current = section.id;
    });

    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + current;
      link.style.background = match ? "var(--g100)" : "";
      link.style.color = match ? "var(--g800)" : "";
    });
  }

  if (navLinks.length && sections.length) {
    window.addEventListener("scroll", setActiveLink, { passive: true });
    setActiveLink();
  }
})();

