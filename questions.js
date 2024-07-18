//test
//console.log("hi");

// all variables
const questionInput = document.querySelector('[data-js="question-text"]');
const answerInput = document.querySelector('[data-js="answer-text"]');
const htmlTag = document.querySelector('[data-js="html-tag"]');
const cssTag = document.querySelector('[data-js="css-tag"]');
const flexTag = document.querySelector('[data-js="flex-tag"]');
const jsTag = document.querySelector('[data-js="js-tag"]');
const individualTag = document.querySelector('[data-js="individual-tag"]');
const categoryInput = document.querySelector('[data-js="category-input"]');
const submitButton = document.querySelector('[data-js="btn-create-question"]');
const questionForm = document.querySelector('[data-js="create-questions"]');
const mainAppend = document.querySelector("main");
const amountCharactersQuestion = document.querySelector(
  '[data-js="amountCharactersQuestion"]'
);
const amountCharactersAnswer = document.querySelector(
  '[data-js="amountCharactersAnswer"]'
);
const displayQuestionCardsProfile = document.querySelector(
  '[data-js="questions-card"]'
);
let count = 0; //state variable localstorage

// show amount of characters left
//question
questionInput.addEventListener("input", (event) => {
  amountCharactersQuestion.textContent = 150 - questionInput.value.length;
});
//answer
answerInput.addEventListener("input", (event) => {
  amountCharactersAnswer.textContent = 50 - answerInput.value.length;
});

// submit button
questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //erstellen des parent containers
  const newQuestion = document.createElement("section");
  newQuestion.setAttribute("data-js", "card");
  newQuestion.classList.add("quiz-card");
  newQuestion.innerHTML = `
        <div class="bookmark-card" data-js="bookmarkBottom"></div>
        <div class="top-bookmark"  data-js="bookmarkTop"></div>
        <h2 class="question">
                    ${questionInput.value}
        </h2>
        <p data-js="antwort" class="answer hidden">${answerInput.value}</p>
        <input type="button" class="btn" data-js="btn" value="Show Answer">
        <div class="categories" data-js="categories-parent"></div>
    `;

  //wenn checkmark checked ist, create Element und store es in der variable
  const createdHtmlTag =
    htmlTag.checked === true && document.createElement("p");
  const createdCssTag = cssTag.checked === true && document.createElement("p");
  const createdFlexTag =
    flexTag.checked === true && document.createElement("p");
  const createdJsTag = jsTag.checked === true && document.createElement("p");
  const createdIndividualTag =
    individualTag.checked === true && document.createElement("p");
  //erstelltes element wird an main appended
  displayQuestionCardsProfile.append(newQuestion);
  event.target.reset();

  //logical operators ensure that function is only called if the checkmark was checked
  createdHtmlTag && createTag(newQuestion, createdHtmlTag, "#html");
  createdCssTag && createTag(newQuestion, createdCssTag, "#css");
  createdFlexTag && createTag(newQuestion, createdFlexTag, "#flexbox");
  createdJsTag && createTag(newQuestion, createdJsTag, "#javascript");
  createdIndividualTag &&
    createTag(newQuestion, createdIndividualTag, `#${categoryInput.value}`);

  //interactivity with new questions
  const answerButton = newQuestion.querySelector("[data-js='btn']");
  const correctAnswer = newQuestion.querySelector("[data-js='antwort']");

  answerButton.addEventListener("click", () => {
    answerButton.classList.add("hidden");
    correctAnswer.classList.remove("hidden");
  });

  correctAnswer.addEventListener("click", () => {
    answerButton.classList.remove("hidden");
    correctAnswer.classList.add("hidden");
  });

  const bookmarkBottom = newQuestion.querySelector(
    '[data-js="bookmarkBottom"]'
  );
  const bookmarkTop = newQuestion.querySelector('[data-js="bookmarkTop"]');

  bookmarkTop.addEventListener("click", () => {
    bookmarkTop.classList.add("hidden");
  });

  bookmarkBottom.addEventListener("click", () => {
    bookmarkTop.classList.remove("hidden");
  });

  //placing it in local storage
  localStorage.setItem(`newQuestion${count}`, `${newQuestion.outerHTML}`);
  count++;
});

//function creates html/css/... tags
function createTag(questionElement, tagVariable, tagContent) {
  tagVariable.classList.add("category");
  tagVariable.textContent = `${tagContent}`;
  const categoryParentContainer = questionElement.querySelector(
    '[data-js="categories-parent"]'
  );
  categoryParentContainer.append(tagVariable);
}

//loads all questions from local storage
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

  displayQuestionCardsProfile.insertAdjacentHTML("beforeend", combinedHTML);

  const cardListLoaded =
    displayQuestionCardsProfile.querySelectorAll('[data-js="card"]');
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

// dark mode
const bodyElementIndex = document.querySelector('[data-js="body-index"]');

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElementIndex.classList.add("dark");
  } else {
    bodyElementIndex.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", loadDarkMode);
