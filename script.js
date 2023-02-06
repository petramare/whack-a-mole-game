"use strict";

const btn = document.querySelector(".button");
const myScore = document.querySelector(".score");
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");

let score = 0;
let timeUp = false;

const randomTime = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.random() * (max - min) + min;
};

const randomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  return hole;
};
-
const peep = () => {
  const time = randomTime(300, 1000);
  const hole = randomHole(holes);

  hole.classList.add("active");

  setTimeout(() => {
    hole.classList.remove("active");
    if (!timeUp) {
      peep();
    }
  }, time);
};

const whack = () => {
  score++;
  myScore.textContent = score;
};

const hide = () => {
  holes.forEach((hole) => {
    hole.classList.remove(".active");
  });
};

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    whack();
    hide();
  });
});

btn.addEventListener('click', () => {
    score = 0;
    myScore.textContent = 0;
    timeUp = false;

    peep();

    setTimeout(()=> {
        timeUp = true;
    }, 15000);

})