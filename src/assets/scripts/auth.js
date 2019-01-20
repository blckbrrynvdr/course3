import preloader from "./modules/preloader";
import "./modules/parallax";
import "./modules/welcomeFlip";

document.addEventListener("DOMContentLoaded", () => {
  preloader().loaded();
});

console.log("auth module loaded");