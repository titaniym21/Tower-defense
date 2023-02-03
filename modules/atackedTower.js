import {
  blueArmy,
  blueTowers,
  redArmy,
  redTowers,
  gameOver,
} from "./objects.js";

const musicCrash = document.getElementById ('crash_music');

let crashTower = function () {
  redArmy.forEach((element, index) => {
    if (element.dispositionX + element.width >= blueTowers[0].dispositionX) {
      musicCrash.play ();
      redArmy.splice(index, 1);
      blueTowers[0].energy -= 10;
      blueTowers[0].xSprite += 200;
      if (blueTowers[0].energy === 0) {
        gameOver[0] = false;
      }
    }
  });

  blueArmy.forEach((element, index) => {
    if (
      element.dispositionX <=
      redTowers[0].dispositionX + redTowers[0].width -50
    ) {
      musicCrash.play ();
      blueArmy.splice(index, 1);
      redTowers[0].energy -= 10;
      redTowers[0].xSprite += 200;
      if (redTowers[0].energy === 0) {
        gameOver[0] = false;
      }
    }
  });
};

export { crashTower };
