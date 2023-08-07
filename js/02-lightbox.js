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
                <img class="gallery__image" src="${preview}" alt="${description}" />
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

  let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
