const allCardsList = document.querySelectorAll('[data-js="card"]');
const answerButtonNode = document.querySelectorAll("[data-js='btn']");
const correctAnswerNode = document.querySelectorAll("[data-js='antwort']");

//Card Functionalities
allCardsList.forEach((card) => {
  const button = card.querySelector("[data-js='btn']");
  const answer = card.querySelector("[data-js='antwort']");

  //Question Buttons

  button.addEventListener("click", () => {
    button.classList.add("hidden");
    answer.classList.remove("hidden");
  });
  answer.addEventListener("click", () => {
    answer.classList.add("hidden");
    button.classList.remove("hidden");
  });

  //Bookmark Button

  const bookmarkBottom = card.querySelector('[data-js="bookmarkBottom"]');
  const bookmarkTop = card.querySelector('[data-js="bookmarkTop"]');

  bookmarkTop.addEventListener("click", () => {
    bookmarkTop.classList.add("hidden");
  });

  bookmarkBottom.addEventListener("click", () => {
    bookmarkTop.classList.remove("hidden");
  });
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

// // storing status in local storage
// bookmarkTop.addEventListener("click", () => {
//   localStorage.setItem("bookmarked1", "true");
// });

// bookmarkBottom.addEventListener("click", () => {
//   localStorage.setItem("bookmarked1", "false");
// });
const displayQuestionCardsIndex = document.querySelector(
  '[data-js="new-questions"]'
);
function loadQuestionFromLocalStorage() {
  const questionsLocalStorage = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("newQuestion")) {
      questionsLocalStorage.push(localStorage.getItem(key));
    }
  }

  // Combine all HTML strings into one
  const combinedHTML = questionsLocalStorage.join("");

  displayQuestionCardsIndex.insertAdjacentHTML("beforeend", combinedHTML);

  const cardListLoaded =
    displayQuestionCardsIndex.querySelectorAll('[data-js="card"]');
  cardListLoaded.forEach((card) => {
    const answerButton = card.querySelector("[data-js='btn']");
    const correctAnswer = card.querySelector("[data-js='antwort']");

    answerButton.addEventListener("click", () => {
      answerButton.classList.add("hidden");
      correctAnswer.classList.remove("hidden");
    });

    correctAnswer.addEventListener("click", () => {
      answerButton.classList.remove("hidden");
      correctAnswer.classList.add("hidden");
    });

    const bookmarkBottom = card.querySelector('[data-js="bookmarkBottom"]');
    const bookmarkTop = card.querySelector('[data-js="bookmarkTop"]');

    bookmarkTop.addEventListener("click", () => {
      bookmarkTop.classList.add("hidden");
    });

    bookmarkBottom.addEventListener("click", () => {
      bookmarkTop.classList.remove("hidden");
    });
  });
}

loadQuestionFromLocalStorage();

// // loading status from local storage

// function loadBookmarkStatus() {
//   const bookmarkedStorage = localStorage.getItem("bookmarked1");
//   if (bookmarkedStorage === "true") {
//     bookmarkTop1.classList.add("hidden");
//   } else {
//     bookmarkTop1.classList.remove("hidden");
//   }
// }

// document.addEventListener("DOMContentLoaded", loadBookmarkStatus);

// //retrieve questions from questions page / local storage and display here
// function loadQuestionFromLocalStorage() {
//   const retrievedNewQuestion = localStorage.getItem("newQuestion");
//   const displayQuestionCardsIndex = document.querySelector(
//     '[data-js="new-questions"]'
//   );
//   displayQuestionCardsIndex.insertAdjacentHTML(
//     "beforeend",
//     retrievedNewQuestion
//   );
// }

// localStorage.getItem("newQuestion") && loadQuestionFromLocalStorage();
