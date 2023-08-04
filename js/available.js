/** @format */

import { property } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".available_list");

  property.forEach((pro) => {
    let card = createProductCard(pro);
    list.appendChild(card);
  });
});

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener(
    "click",
    () => (window.location.href = `${product.id}.html`)
  );

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.classList.add("card_image");
  card.appendChild(productImage);

  const productDes = document.createElement("div");
  productDes.textContent = product.description;
  productDes.classList.add("card_des");
  card.appendChild(productDes);

  const productPrice = document.createElement("div");
  productPrice.textContent = product.price;
  productPrice.classList.add("card_price");
  card.appendChild(productPrice);

  return card;
}
