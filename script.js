const links = document.querySelectorAll(".js-nav-link");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.getAttribute("href").replace("#", "");
    const rectTop = document.getElementById(id).getBoundingClientRect().top,
      position = window.pageYOffset,
      buffer = 50,
      top = rectTop + position - buffer;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});
