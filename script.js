const CV_URL = "assets/AshutoshChandra_CV.pdf";
const UNIFIED_SUMMARY = "Data and supply chain analyst with three years of experience delivering automation, dashboards and reliable data products—supported by an MSc in Business Data Analytics and industry research with A.P. Moller–Maersk.";

// Present one clear profile and one CV for both target roles.
document.querySelector(".role-switch")?.remove();

const heroSummary = document.querySelector("#hero-summary");
if (heroSummary) {
  heroSummary.textContent = UNIFIED_SUMMARY;
}

const heroResumeLink = document.querySelector(".resume-link");
if (heroResumeLink) {
  heroResumeLink.href = CV_URL;
  heroResumeLink.setAttribute("download", "AshutoshChandra_CV.pdf");
  heroResumeLink.innerHTML = 'Download CV <span aria-hidden="true">↓</span>';
}

const contactCvLinks = document.querySelectorAll(".cv-links a");
contactCvLinks.forEach((link, index) => {
  if (index === 0) {
    link.href = CV_URL;
    link.setAttribute("download", "AshutoshChandra_CV.pdf");
    link.textContent = "Download CV ↓";
  } else {
    link.remove();
  }
});

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const show = button.dataset.filter === "all" || card.dataset.category === button.dataset.filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
});

const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
