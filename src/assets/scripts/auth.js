import preloader from "./modules/preloader";
import "./modules/parallax";
import "./modules/welcomeFlip";
import "./modules/authValidation";

document.addEventListener("DOMContentLoaded", () => {
  preloader().loaded();
});

console.log("auth module loaded");