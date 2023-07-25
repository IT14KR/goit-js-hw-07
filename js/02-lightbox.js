import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".js-gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
  )
  .join("");

container.insertAdjacentHTML("beforeend", markup);

container.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const largeImage = event.target.dataset.source;

  //   const instance = simpleLightbox.create(
  //     `<img src="${largeImage}" alt="${event.target.alt}">`
  //   );

  instance.show();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const instance = simpleLightbox.instance;
    if (instance) {
      instance.close();
    }
  }
});

console.log(galleryItems);
