/**
 * Portfolio interactions
 * - Mobile navigation
 * - Sticky header state
 * - Smooth section scrolling helpers
 * - Scroll reveal (Intersection Observer)
 * - Active nav indicator
 * - Back-to-top
 * - Dynamic copyright year
 */

(() => {
  "use strict";

  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const backToTop = document.getElementById("back-to-top");
  const yearEl = document.getElementById("copyright-year");
  const hero = document.querySelector(".hero");
  const sections = document.querySelectorAll("main section[id]");

  /* ---------- Helpers ---------- */
  const closeMobileNav = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  };

  const openMobileNav = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");
  };

  /* ---------- Copyright year ---------- */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Hero entrance ---------- */
  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add("is-ready");
    });
  }

  /* ---------- Mobile navigation ---------- */
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileNav();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        closeMobileNav();
      }
    });
  }

  /* ---------- Sticky header + back to top ---------- */
  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle("is-scrolled", y > 12);
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", y > 480);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Skip hero items — they use CSS entrance animation
          if (entry.target.closest(".hero")) {
            observer.unobserve(entry.target);
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealEls.forEach((el) => {
      if (!el.closest(".hero")) {
        revealObserver.observe(el);
      }
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Active navigation indicator ---------- */
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const section = link.getAttribute("data-section");
      link.classList.toggle("is-active", section === id);
    });
  };

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Default active state on load
  setActiveLink("home");
})();
