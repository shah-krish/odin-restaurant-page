import "./styles.css";
import homeModule from './home';
import aboutModule from './about';
import menuModule from './menu';
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
const menuButton = document.querySelector(".menu");

homeButton.addEventListener("click", homeModule);
aboutButton.addEventListener("click", aboutModule);
menuButton.addEventListener("click", menuModule)

homeModule();