const portfolioModes = {
  data: {
    summary: "Data analyst with three years of experience delivering automation, dashboards and reliable data products—and an MSc specialism in business and supply chain analytics.",
    resumeText: "Download Data CV",
    resumeHref: "assets/AshutoshChandra_Data_Analyst_Resume.docx"
  },
  supply: {
    summary: "Analytics professional combining three years of high-volume data delivery with MSc research into supply chain complexity, analytics capability and GenAI decision support.",
    resumeText: "Download Supply Chain CV",
    resumeHref: "assets/AshutoshChandra_Supply_Chain_Analyst_Resume.docx"
  }
};

const roleButtons = document.querySelectorAll(".role-button");
const heroSummary = document.querySelector("#hero-summary");
const resumeLink = document.querySelector(".resume-link");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = portfolioModes[button.dataset.role];
    roleButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    heroSummary.textContent = mode.summary;
    resumeLink.firstChild.textContent = `${mode.resumeText} `;
    resumeLink.href = mode.resumeHref;
  });
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

document.querySelector("#year").textContent = new Date().getFullYear();