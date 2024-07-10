const bodyElementBookmarks = document.querySelector(
  '[data-js="body-bookmarks"]'
);

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElementBookmarks.classList.add("dark");
  } else {
    bodyElementBookmarks.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", loadDarkMode);
