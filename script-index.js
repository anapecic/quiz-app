//Question Buttons
//Button 1
const answerButton1 = document.querySelector("[data-js='btn1']");
const correctAnswer1 = document.querySelector("[data-js='antwort-1']");

answerButton1.addEventListener("click", () => {
  answerButton1.classList.add("hidden");
  correctAnswer1.classList.remove("hidden");
});

correctAnswer1.addEventListener("click", () => {
  answerButton1.classList.remove("hidden");
  correctAnswer1.classList.add("hidden");
});

//Button 2
const answerButton2 = document.querySelector("[data-js='btn2']");
const correctAnswer2 = document.querySelector("[data-js='antwort-2']");

answerButton2.addEventListener("click", () => {
  answerButton2.classList.add("hidden");
  correctAnswer2.classList.remove("hidden");
});

correctAnswer2.addEventListener("click", () => {
  answerButton2.classList.remove("hidden");
  correctAnswer2.classList.add("hidden");
});

//Bookmark Button
//Button 1
const bookmarkBottom1 = document.querySelector('[data-js="bookmarkBottom1"]');
const bookmarkTop1 = document.querySelector('[data-js="bookmarkTop1"]');
const card1 = document.querySelector('[data-js="card1"]');

bookmarkTop1.addEventListener("click", () => {
  bookmarkTop1.classList.add("hidden");
});

bookmarkBottom1.addEventListener("click", () => {
  bookmarkTop1.classList.remove("hidden");
});

//Button 2
const bookmarkBottom2 = document.querySelector('[data-js="bookmarkBottom2"]');
const bookmarkTop2 = document.querySelector('[data-js="bookmarkTop2"]');
const card2 = document.querySelector('[data-js="card2"]');

bookmarkTop2.addEventListener("click", () => {
  bookmarkTop2.classList.add("hidden");
});

bookmarkBottom2.addEventListener("click", () => {
  bookmarkTop2.classList.remove("hidden");
});

// dark mode

const bodyElementIndex = document.querySelector('[data-js="body-index"]');

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElementIndex.classList.add("dark");
  } else {
    // If dark mode is not enabled
    bodyElementIndex.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", loadDarkMode);

// BOOKMARKS
// setting local

// storing status in local storage
bookmarkTop1.addEventListener("click", () => {
  localStorage.setItem("bookmarked1", "true");
});

bookmarkBottom1.addEventListener("click", () => {
  localStorage.setItem("bookmarked1", "false");
});

// loading status from local storage

function loadBookmarkStatus() {
  const bookmarkedStorage = localStorage.getItem("bookmarked1");
  if (bookmarkedStorage === "true") {
    bookmarkTop1.classList.add("hidden");
  } else {
    bookmarkTop1.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", loadBookmarkStatus);
