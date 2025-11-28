const routes = {
  home: "src/pages/home.html",
  docs: "src/pages/docs.html",
  forum: "src/pages/forum.html",
  game: "src/pages/game.html",
  gameupdate: "src/pages/gameupdate.html",
  hire: "src/pages/hire.html",
  toggle: "src/pages/toggle.html"
};

function loadPage() {
  const hash = location.hash.replace("#", "") || "home";
  const file = routes[hash] || routes["home"];

  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("app").innerHTML = "<h1>Page not found</h1>";
    });
}

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);
