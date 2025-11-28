function createSearchBar(placeholder = "Search...") {
  const wrapper = document.createElement("div");
  wrapper.className = "search-box";

  const input = document.createElement("input");
  input.className = "search-input";
  input.placeholder = placeholder;

  wrapper.appendChild(input);

  return { wrapper, input };
}
