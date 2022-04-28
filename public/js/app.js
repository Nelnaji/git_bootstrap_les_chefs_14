// Ceci vas ajouter du smoorth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// barre de navigation en sticky

const sectionHeroEl = document.querySelector(".hero");
const header = document.querySelector(".header__nav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      header.classList.add("stic");
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("stic");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

obs.observe(sectionHeroEl);
