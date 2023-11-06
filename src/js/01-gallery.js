import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
import SimpleLightBox from "simplelightbox"
// Change code below this line


const list = document.querySelector(".gallery")

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems))


const gallery = new SimpleLightBox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
})

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    ).join("")
}


console.log(galleryItems);