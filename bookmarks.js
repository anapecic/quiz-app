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

// bookmark variables
const bookmarkBottom1 = document.querySelector('[data-js="bookmarkBottom1"]');
const bookmarkTop1 = document.querySelector('[data-js="bookmarkTop1"]');
const card1 = document.querySelector('[data-js="card1"]');

// bookmarked questions
const bookmarkedStorage = localStorage.getItem("bookmarked1");
if (bookmarkedStorage === "true") {
  card1.classList.remove("hidden");
} else {
  card1.classList.add("hidden");
}

//removing bookmark in bookmark page
bookmarkBottom1.addEventListener("click", () => {
  bookmarkTop1.classList.remove("hidden");
  localStorage.setItem("bookmarked1", "false");
});

// adding bookmark in bookmark page after removing
bookmarkTop1.addEventListener("click", () => {
  localStorage.setItem("bookmarked1", "true");
  bookmarkTop1.classList.add("hidden");
});
