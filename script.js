const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrolly > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 1890,
  delay: 200,
});

ScrollReveal().reveal(".home, .about-img, .services, .portofolio, .contact", {
  origin: "left",
});
ScrollReveal().reveal(
  ".about-text, .services-content, .portofolio-content, .contact-form",
  { origin: "right" }
);

ScrollReveal().reveal("body", { interval: 16, reset: true });

const typed = new Typed(".multiple-text", {
  strings: ["Najwa Binti Alwi", "junior Web Devoloper", " Siswa Makn Ende"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
