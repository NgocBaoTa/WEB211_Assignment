/** @format */
import { property, feedback } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  listFeedback(feedback);
const menuNav = document.getElementById("menu");

categories.forEach((category) => {
  const button = document.createElement("button");
  button.textContent = category.name;
  button.addEventListener("click", () => showProductsByCategory(category));
  menuNav.appendChild(button);
});

});

function listFeedback(feedbackData) {
  const feedbackElement = document.querySelector(".feedback");

  feedbackData.forEach((feedbackItem, index) => {
    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-item");

    feedbackEntry.textContent = `${feedbackItem.feedback} - ${feedbackItem.name}`;

    feedbackElement.appendChild(feedbackEntry);
  });
}
