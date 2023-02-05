const images = [
  "../imgs/traveller.jpeg",
  "../imgs/space.jpeg",
  "../imgs/hellmouth.webp",
];

let count = 0;
let isAuto = false;
let automatic = null;

const shownImage = document.getElementById("img");
const prev = document.getElementById("prev");
const auto = document.getElementById("auto");
const next = document.getElementById("next");

next.addEventListener("click", scrollNext);

prev.addEventListener("click", () => {
  if (count === 0) {
    count = images.length - 1;
  } else {
    count--;
  }
  shownImage.src = images[count];
});

auto.addEventListener("click", () => {
  if (isAuto) {
    clearInterval(automatic);
    isAuto = !isAuto;
  } else {
    automatic = setInterval(scrollNext, 3000);
    isAuto = !isAuto;
  }
});

function scrollNext() {
  if (count === images.length - 1) {
    count = 0;
  } else {
    count++;
  }
  shownImage.src = images[count];
}
