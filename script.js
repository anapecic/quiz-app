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
const question1 = document.querySelector('[data-js="question1"]');

bookmarkTop1.addEventListener("click", () => {
  bookmarkTop1.classList.add("hidden");
});

bookmarkBottom1.addEventListener("click", () => {
  bookmarkTop1.classList.remove("hidden");
});

const bookmarkBottom2 = document.querySelector('[data-js="bookmarkBottom2"]');
const bookmarkTop2 = document.querySelector('[data-js="bookmarkTop2"]');
const question2 = document.querySelector('[data-js="question2"]');

bookmarkTop2.addEventListener("click", () => {
  bookmarkTop2.classList.add("hidden");
});

bookmarkBottom2.addEventListener("click", () => {
  bookmarkTop2.classList.remove("hidden");
});

//right now the page reloads and when clicking on bookmarks, the class is not hidden anymore //maybe issue with different html file?
// if (bookmarkTop1.classList === "hidden") {
//   question1.classList.remove("hidden");
// }
