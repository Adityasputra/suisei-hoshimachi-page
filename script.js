const selector = document.querySelector(".navbar__language-selector");
const currentLang = selector.querySelector(".navbar__language-current");
const options = selector.querySelectorAll(".navbar__language-dropdown li");

selector.addEventListener("click", () => {
  selector.classList.toggle("open");
  selector.setAttribute("aria-expanded", selector.classList.contains("open"));
});

options.forEach((item) => {
  item.addEventListener("click", (e) => {
    currentLang.textContent = e.target.dataset.lang;
    selector.classList.remove("open");
    selector.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!selector.contains(e.target)) {
    selector.classList.remove("open");
    selector.setAttribute("aria-expanded", "false");
  }
});

const darkModeToggle = document.querySelector(".navbar__theme-toggle");
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
