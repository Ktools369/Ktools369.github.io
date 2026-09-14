document.getElementById("year").textContent = new Date().getFullYear();

if (document.querySelector(".legal")) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "legal.css";
  document.head.appendChild(stylesheet);
}

document.querySelectorAll('[aria-disabled="true"]').forEach((element) => {
  element.style.cursor = "default";
  if (element.classList.contains("primary-button")) {
    element.style.background = "#777b88";
    element.style.boxShadow = "none";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.setAttribute("tabindex", "-1");
  });
});
