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
  newQuestion.classList.add("quiz-card");
  newQuestion.innerHTML = `
        <div class="bookmark-card" data-js="bookmarkBottom1"></div>
        <div class="top-bookmark"  data-js="bookmarkTop1"></div>
        <h2 class="question">
                    ${questionInput.value}
        </h2>
        <p data-js="antwort-1" class="answer hidden">${answerInput.value}</p>
        <input type="button" class="btn" data-js="btn1" value="Show Answer">
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
  const answerButton1 = newQuestion.querySelector("[data-js='btn1']");
  const correctAnswer1 = newQuestion.querySelector("[data-js='antwort-1']");

  answerButton1.addEventListener("click", () => {
    answerButton1.classList.add("hidden");
    correctAnswer1.classList.remove("hidden");
  });

  correctAnswer1.addEventListener("click", () => {
    answerButton1.classList.remove("hidden");
    correctAnswer1.classList.add("hidden");
  });

  //Bookmark Button
  //Button 1
  const bookmarkBottom1 = newQuestion.querySelector(
    '[data-js="bookmarkBottom1"]'
  );
  const bookmarkTop1 = newQuestion.querySelector('[data-js="bookmarkTop1"]');
  const card1 = newQuestion.querySelector('[data-js="card1"]');

  bookmarkTop1.addEventListener("click", () => {
    bookmarkTop1.classList.add("hidden");
  });

  bookmarkBottom1.addEventListener("click", () => {
    bookmarkTop1.classList.remove("hidden");
  });

  localStorage.setItem("newQuestion", `${newQuestion.outerHTML}`);
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

function loadQuestionFromLocalStorage() {
  const retrievedNewQuestion = localStorage.getItem("newQuestion");
  displayQuestionCardsProfile.insertAdjacentHTML(
    "beforeend",
    retrievedNewQuestion
  );
}

localStorage.getItem("newQuestion") && loadQuestionFromLocalStorage();
