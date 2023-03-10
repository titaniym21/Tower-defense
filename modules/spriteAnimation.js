import {
  blueArmy,
  blueTowers,
  redArmy,
  redTowers,
  pauseBoolean,
  gameOver,
  countRed,
  countBlue,
  mainMusic,
  canvas,
  ctx,
} from "./objects.js";
import { clashArmy1, clashArmy2, moveSoldiers } from "./moveSoldiers.js";
import { crashTower } from "./atackedTower.js";


const widthCtx = canvas.width;
const heightCtx = canvas.height;

let field = new Image(widthCtx, heightCtx);
field.src = "img/field.jpg";
field.addEventListener(
  "load",
  ctx.drawImage(field, 0, 0, widthCtx, heightCtx),
  false
);

let renderingArmy = function (army) {
  army.forEach((element) => {
    element.draw();
  });
};

let renderingTowers = function (tower) {
  tower.forEach((element) => {
    element.draw();
  });
};

let allGame = function () {
  if (pauseBoolean[0]) {
    moveSoldiers(blueArmy);
    moveSoldiers(redArmy);
    if (Math.floor(Math.random() + 0.5)) {
      clashArmy1();
      clashArmy2();
    } else {
      clashArmy2();
      clashArmy1();
    }
    crashTower();
    if (gameOver[0]) {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      ctx.drawImage(field, 0, 0, widthCtx, heightCtx);
      renderingTowers(redTowers);
      renderingTowers(blueTowers);
      renderingArmy(redArmy);
      renderingArmy(blueArmy);
      requestAnimationFrame(allGame);
    } else {
      mainMusic[0].pause();
      cancelAnimationFrame(allPaint);
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      const damageBlue = 100 - blueTowers[0].energy;
      const damageRed = 100 - redTowers[0].energy;
      ctx.drawImage(field, 0, 0, widthCtx, heightCtx);
      renderingTowers(redTowers);
      renderingTowers(blueTowers);
      ctx.fillStyle = "red";
      ctx.font = "40px serif";
      ctx.fillText("Number of created\nfighters: " + countRed[0], 50, 300);
      ctx.fillText("Number of dead\nfighters: " + countRed[1], 50, 450);
      ctx.fillStyle = "blue";
      ctx.fillText("Number of created\nfighters: " + countBlue[0], 350, 350);
      ctx.fillText("Number of dead\nfighters: " + countBlue[1], 350, 500);
    }
  }
};

let allPaint = requestAnimationFrame(allGame);

export { allGame };
export { ctx };
