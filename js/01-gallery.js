import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const refs = {
  galleryUl: document.querySelector(".gallery"),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryUl.insertAdjacentHTML("beforeend", galleryMarkup);

refs.galleryUl.addEventListener("click", onGalleryUlClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}

function onGalleryUlClick(e) {
  e.preventDefault();
  const img = e.target;
  if (!img.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${img.dataset.source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
