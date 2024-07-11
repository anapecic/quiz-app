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

// submit button
questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("submit button works");
  const newQuestion = document.createElement("section");
  newQuestion.classList.add("quiz-card");
  newQuestion.innerHTML = `
    <div class="bookmark-card" data-js="bookmarkBottom1"></div>
            <div class="top-bookmark"  data-js="bookmarkTop1"></div>
            <h2 class="question">
                ${questionInput.value}
            </h2>
            <p data-js="antwort-1" class="answer hidden">${answerInput.value}</p>
            <input type="submit" class="btn" data-js="btn1" value="Show Answer">
            <div class="categories" data-js="categories-parent">
            </div>
  `;

  const createdHtmlTag =
    htmlTag.checked === true && document.createElement("p");
  const createdCssTag = cssTag.checked === true && document.createElement("p");
  const createdFlexTag =
    flexTag.checked === true && document.createElement("p");
  const createdJsTag = jsTag.checked === true && document.createElement("p");
  const createdIndividualTag =
    individualTag.checked === true && document.createElement("p");

  mainAppend.append(newQuestion);

  //logical operators ensure that function is only called if the checkmark was checked
  createdHtmlTag && createTag(newQuestion, createdHtmlTag, "#html");
  createdCssTag && createTag(newQuestion, createdCssTag, "#css");
  createdFlexTag && createTag(newQuestion, createdFlexTag, "#flexbox");
  createdJsTag && createTag(newQuestion, createdJsTag, "#javascript");
  createdIndividualTag &&
    createTag(newQuestion, createdIndividualTag, `#${categoryInput.value}`);
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

//interactivity with new questions

const answerButton1 = document.querySelector("[data-js='btn1']");
const correctAnswer1 = document.querySelector("[data-js='antwort-1']");
console.log(answerButton1);

answerButton1.addEventListener("click", () => {
  answerButton1.classList.add("hidden");
  correctAnswer1.classList.remove("hidden");
});

correctAnswer1.addEventListener("click", () => {
  answerButton1.classList.remove("hidden");
  correctAnswer1.classList.add("hidden");
});
