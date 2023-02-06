import { createSoldiers } from "./createNewUnit.js";
import { redArmy, blueArmy, pauseBoolean, gameOver, mainMusic } from "./objects.js";
import { allGame } from "./spriteAnimation.js";

const borderGame = document.getElementsByClassName("game")[0];
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");

let startGame = function () {
  borderGame.style.border = "2px solid black";
  if (gameOver[0]) {
    if (pauseBoolean[0] === false) {
      pauseBoolean[0] = true;
      mainMusic[0].play();
      createSoldiers("red", redArmy);
      createSoldiers("blue", blueArmy);
      allGame();
      startButton.removeEventListener("click", startGame);
      pauseButton.addEventListener("click", pauseGame);
    }
  }
};

startButton.addEventListener("click", startGame);

let pauseGame = function () {
  if (gameOver[0]) {
    if (pauseBoolean[0]) {
      pauseBoolean[0] = false;
      pauseButton.textContent = "Resume";
    } else {
      pauseBoolean[0] = true;
      pauseButton.textContent = "Pause";
      createSoldiers("red", redArmy);
      createSoldiers("blue", blueArmy);
      allGame();
    }
  }
};

let restartGame = function () {
  window.location.reload();
};

restartButton.addEventListener("click", restartGame);
