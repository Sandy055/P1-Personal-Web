import { applySavedTheme, toggleTheme } from "./theme.js";

applySavedTheme();

const themeButton = document.querySelector(".theme-button");

if (themeButton) {
  themeButton.addEventListener("click", toggleTheme);
}