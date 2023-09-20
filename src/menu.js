import menuSvg from "./Assets/menu.svg";
import closeSvg from "./Assets/close.svg";

// menu image src allocations
const menuImg = document.querySelector(".menu-svg");
menuImg.src = menuSvg;

const cancelImg = document.querySelector(".cancel-img");
cancelImg.src = closeSvg;

// menu-btn functionality
const revealMenuBtn = document.querySelector(".menu-btn");
const drawerContainer = document.querySelector(".drawer-container");
const hideDrawerBtn = document.querySelector(".close-drawer");

function revealMenu() {
  drawerContainer.classList.add("visible-drawer");
}

function hideDrawer() {
  drawerContainer.classList.remove("visible-drawer");
}

revealMenuBtn.addEventListener("click", revealMenu);
hideDrawerBtn.addEventListener("click", hideDrawer);

export default menuImg;
