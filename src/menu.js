import menuSvg from "./Assets/menu.svg";
import closeSvg from "./Assets/close.svg";

const menuImg = document.querySelector(".menu-svg");
menuImg.src = menuSvg;

const cancelImg = document.querySelector(".cancel-img");
cancelImg.src = closeSvg;

export default menuImg;
