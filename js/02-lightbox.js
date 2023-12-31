import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const refs = {
  galleryUl: document.querySelector(".gallery"),
};
const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryUl.insertAdjacentHTML("beforeend", galleryMarkup);



if ("loading" in HTMLImageElement.prototype) {
  // supported in browser
  addSrcToLazyImages();
} else {
  // fetch polyfill/third-party library
  addLazySizesScript();
}

// refs.galleryUl.addEventListener("click", onGalleryUlClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

// function onGalleryUlClick(e) {
//   e.preventDefault();
//   const img = e.target;
//   if (!img.classList.contains("gallery__image")) {
//     return;
//   }

  let gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
// }

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  document.body.appendChild(script);
}

function addSrcToLazyImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
}
