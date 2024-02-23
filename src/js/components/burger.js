const myMegaMenu = document.querySelector(".mega_menu");
const mySpans = document.querySelectorAll(".mega_menu span");
let move = false;

myMegaMenu.addEventListener("click", () => {
  if (!move) {
    mySpans[1].classList.add("rmSecond");
    mySpans[0].classList.add("centerizing", "rotF");
    mySpans[2].classList.add("centerizing", "rotL");
  } else {
    mySpans[1].classList.remove("rmSecond");
    mySpans[0].classList.remove("centerizing", "rotF");
    mySpans[2].classList.remove("centerizing", "rotL");
  }
  move = !move;
});
