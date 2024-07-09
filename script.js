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

// dark mode

// Function to load the dark mode setting from localStorage and apply it
function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode"); // Get the current dark mode setting from localStorage
  if (darkMode === "enabled") {
    // If dark mode is enabled
    bodyElement.classList.add("dark"); // Add the 'dark' class to the body element
    darkButton.checked = true; // Check the dark mode toggle button
  } else {
    // If dark mode is not enabled
    bodyElement.classList.remove("dark"); // Remove the 'dark' class from the body element
    darkButton.checked = false; // Uncheck the dark mode toggle button
  }
}

// Function to toggle the dark mode setting and update localStorage
function toggleDarkMode() {
  const darkMode = localStorage.getItem("darkMode"); // Get the current dark mode setting from localStorage
  if (darkMode === "enabled") {
    // If dark mode is enabled
    localStorage.setItem("darkMode", "disabled"); // Set dark mode to disabled in localStorage
    bodyElement.classList.remove("dark"); // Remove the 'dark' class from the body element
  } else {
    // If dark mode is not enabled
    localStorage.setItem("darkMode", "enabled"); // Set dark mode to enabled in localStorage
    bodyElement.classList.add("dark"); // Add the 'dark' class to the body element
  }
}

// Select the body element and the dark mode toggle button
const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = bodyElement.querySelector('[data-js="darkbutton"]');

// Add an event listener to the dark mode toggle button to call toggleDarkMode when clicked
darkButton.addEventListener("click", toggleDarkMode);

// Add an event listener to the document to call loadDarkMode when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadDarkMode);
