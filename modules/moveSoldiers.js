import { blueArmy, redArmy, countBlue, countRed } from "./objects.js";

let moveSoldiers = function (army) {
  army.forEach((element) => {
    element.dispositionX += element.step;
  });
};

let clashArmy1 = function () {
  redArmy.forEach((element) => {
    blueArmy.forEach((el, index) => {
      if (
        element.dispositionX + element.width > el.dispositionX &&
        element.dispositionX + element.width < el.width / 2 + el.dispositionX &&
        ((element.victim === "beatFlying" && el.functional === "flying") ||
          (element.victim === "beatWalking" && el.functional === "walking") ||
          (element.victim === "beatAll" &&
            (el.functional === "flying" || el.functional === "walking")))
      ) {
        element.dispositionX -= element.step;
        el.life -= 1;
        if (el.life === 0) {
          blueArmy.splice(index, 1);
          countBlue[1] += 1;
        }
      }
    });
  });
};

let clashArmy2 = function () {
  blueArmy.forEach((element) => {
    redArmy.forEach((el, index) => {
      if (
        element.dispositionX < el.dispositionX + el.width &&
        element.dispositionX > el.dispositionX + el.width / 2 &&
        ((element.victim === "beatFlying" && el.functional === "flying") ||
          (element.victim === "beatWalking" && el.functional === "walking") ||
          (element.victim === "beatAll" &&
            (el.functional === "flying" || el.functional === "walking")))
      ) {
        element.dispositionX -= element.step;
        el.life -= 1;
        if (el.life === 0) {
          redArmy.splice(index, 1);
          countRed[1] += 1;
        }
      }
    });
  });
};

export { moveSoldiers };
export { clashArmy1 };
export { clashArmy2 };
