/** @format */

import { property } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const page = document.querySelector(".container");

  let path = window.location.pathname;
  let parts = path.split("/");
  let propertyID = parts[parts.length - 1].split(".")[0];

  let pro = property.find((pro) => pro.id === propertyID);

  let card = createPage(pro);
  page.appendChild(card);
});

function createPage(page) {
  const card = document.createElement("div");
  card.classList.add("page_content");

  const pagePrice = document.createElement("div");
  pagePrice.textContent = `Price: ${page.price}`;
  pagePrice.classList.add("page_price");
  card.appendChild(pagePrice);

  const pageAddress = document.createElement("div");
  pageAddress.textContent = `Address: ${page.address}`;
  pageAddress.classList.add("page_address");
  card.appendChild(pageAddress);

  const pageSize = document.createElement("div");
  pageSize.textContent = `Size: ${page.size}`;
  pageSize.classList.add("page_size");
  card.appendChild(pageSize);

  const pageRoom = document.createElement("div");
  pageRoom.textContent = `Room: ${page.room}`;
  pageRoom.classList.add("page_room");
  card.appendChild(pageRoom);

  const imageList = document.createElement("div");
  imageList.classList.add("img_list");
  page.detailImg.forEach((img) => {
    const image = document.createElement("img");
    image.src = img;
    image.classList.add("img_item");
    imageList.appendChild(image);
  });
  card.appendChild(imageList);

  return card;
}
