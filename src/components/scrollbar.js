// src/components/scrollbar.js
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  if (!main) return;

  main.style.overflowY = "auto";
  main.style.scrollBehavior = "smooth";
});
