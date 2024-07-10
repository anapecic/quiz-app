// dark mode
const bodyElement = document.querySelector('[data-js="body-profile"]');
const darkButton = bodyElement.querySelector('[data-js="darkbutton"]');

// CHECKT OB DARKMODE ENABLED IST UND APPLIZIERT DAS AUS DEM LOCAL STORAGE HERAUS
function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElement.classList.add("dark");
    darkButton.checked = true;
  } else if (darkMode === "disabled") {
    bodyElement.classList.remove("dark");
    darkButton.checked = false;
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// CHECKBOX FUNKTIONALITÄT!! SPEICHERT DIE EINSTELLUNG IM LOCAL STORAGE
function toggleDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    localStorage.setItem("darkMode", "disabled");
    bodyElement.classList.remove("dark");
  } else if (darkMode === "disabled") {
    localStorage.setItem("darkMode", "enabled");
    bodyElement.classList.add("dark");
  }
}

// NUTZT DEN BUTTON
darkButton.addEventListener("change", toggleDarkMode);

// BEIM NEULADEN WIRD FUNKTION ANGEWENDET
document.addEventListener("DOMContentLoaded", loadDarkMode);
