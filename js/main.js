const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav__wrapper");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen);
});
