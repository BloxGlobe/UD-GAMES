// src/components/searchbar.js
// Global site search with live suggestions

const pages = [
  { name: "Home", route: "#home" },
  { name: "Docs", route: "#docs" },
  { name: "Forum", route: "#forum" },
  { name: "Game", route: "#game" },
  { name: "Game Updates", route: "#gameupdate" },
  { name: "Hire", route: "#hire" },
  { name: "Toggle Settings", route: "#toggle" }
];

function createSearchbar() {
  const container = document.getElementById("top-search");
  if (!container) return;

  container.innerHTML = `
    <div class="search-wrapper">
      <input type="text" id="global-search" placeholder="Search dashboard..." autocomplete="off" />
      <div id="search-results" class="search-results"></div>
    </div>
  `;

  const input = document.getElementById("global-search");
  const resultsBox = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    if (query.length === 0) {
      resultsBox.style.display = "none";
      return;
    }

    const filtered = pages.filter(p => p.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
      resultsBox.innerHTML = `<div class="result-item">No results found</div>`;
      resultsBox.style.display = "block";
      return;
    }

    resultsBox.innerHTML = filtered
      .map(p => `<div class="result-item" data-route="${p.route}">${p.name}</div>`)
      .join("");

    resultsBox.style.display = "block";
  });

  document.addEventListener("click", e => {
    if (e.target.classList.contains("result-item")) {
      const route = e.target.getAttribute("data-route");
      location.hash = route;
      resultsBox.style.display = "none";
      input.value = "";
    }

    if (!container.contains(e.target)) {
      resultsBox.style.display = "none";
    }
  });
}

window.addEventListener("DOMContentLoaded", createSearchbar);
