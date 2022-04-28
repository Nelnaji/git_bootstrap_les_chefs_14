///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header__nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
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
      sectionEl.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close mobile naviagtion
    if (link.classList.contains("header__nav-box-link"))
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
  }, {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

obs.observe(sectionHeroEl);

// working the menu clicking

document.querySelector(".breakfast").addEventListener("click", function () {
  const img = document.getElementsByClassName("img-grid-menu");
  for (let i = 0; i < img.length; i++) {
    img[i].src = "./public/img/menu_image_1.jpg";
  }
});
document.querySelector(".lunch").addEventListener("click", function () {
  const img = document.getElementsByClassName("img-grid-menu");
  for (let i = 0; i < img.length; i++) {
    img[i].src = "./public/img/menu_image_2.jpg";
  }
});
document.querySelector(".snacks").addEventListener("click", function () {
  const img = document.getElementsByClassName("img-grid-menu");
  for (let i = 0; i < img.length; i++) {
    img[i].src = "./public/img/menu_image_3.jpg";
  }
});
document.querySelector(".dinner").addEventListener("click", function () {
  const img = document.getElementsByClassName("img-grid-menu");
  for (let i = 0; i < img.length; i++) {
    img[i].src = "./public/img/menu_image_4.jpg";
  }
});