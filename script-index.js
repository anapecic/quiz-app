//Question Buttons

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
const bookmarkBottom1 = document.querySelector('[data-js="bookmarkBottom1"]');
const bookmarkTop1 = document.querySelector('[data-js="bookmarkTop1"]');
const card1 = document.querySelector('[data-js="card1"]');

bookmarkTop1.addEventListener("click", () => {
  bookmarkTop1.classList.add("hidden");
});

bookmarkBottom1.addEventListener("click", () => {
  bookmarkTop1.classList.remove("hidden");
});

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
bookmarkTop1.addEventListener("click", () => {
  console.log("bookmarked");
  localStorage.setItem("bookmarked1", "true");
});

bookmarkBottom1.addEventListener("click", () => {
  console.log("notBookmarked");
});
