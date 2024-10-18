import emojis from "./src/emojis.js";
import catEmojis from "./src/cat-emojis.js";
import prideEmojis from "./src/pride-emojis.js";
import { getRandomCat } from "./src/random-cat.js";
// import { createGallery } from "./src/gallery.js";
// import TableOfContents from "./src/tableOfContents.js";

const icon = document.getElementById("banner-icon");

icon.dataset.index = 0;
icon.addEventListener("click", (evt) => {
  const { emoji, index } = getRandomCat(Number(evt.target.dataset.index));
  evt.target.src= `/images/${emoji.name}.svg`;
  evt.target.title = emoji.display;
  evt.target.alt = `${emoji.alt}`;
  evt.target.dataset.index = index;
});

// const gallery = document.getElementById("gallery");

// const catGallery = createGallery("Cats", "cats", catEmojis);
// gallery.insertAdjacentElement("beforeend", catGallery);

// const prideGallery = createGallery("Pride", "pride", prideEmojis);
// gallery.insertAdjacentElement("beforeend", prideGallery);

// const tocList = document.getElementById("toc-list");
// const toc = new TableOfContents(tocList);
// toc.addItem("Cats", "cats");
// toc.addItem("Pride", "pride");
