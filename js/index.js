/** @format */

const pages = [
  "Map",
  "Home",
  "Available",
  "Property1",
  "Property2",
  "Property3",
  "Property4",
  "Contact",
];
document.addEventListener("DOMContentLoaded", function () {
  const menuNav = document.getElementById("menu");

  for (let i = 0; i < pages.length; i++) {
    const button = document.createElement("button");
    button.textContent = `${pages[i]}`;
    button.addEventListener("click", () => {
      window.location.href = `${pages[i].toLowerCase()}.html`;
      //   showProductsByCategory(category);
    });
    menuNav.appendChild(button);
  }
});
