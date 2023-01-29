import {blueArmy, redArmy, count} from "./objects.js";

let moveSoldiers = function (army) {
  army.forEach(element => {
        element.dispositionX += element.step;
  });
};

let clash = function () {
    redArmy.forEach ((element) => {
      blueArmy.forEach ((el,index) => {
        if ((element.dispositionX + element.width) === el.dispositionX) {
          element.dispositionX -= element.step;
          el.life -= 1;
          if (el.life === 0) {
            blueArmy.splice (index,1);
            count[1] += 1;
          };
        }
      });
    });

    blueArmy.forEach ((element) => {
      redArmy.forEach ((el,index) => {
        if ((element.dispositionX + element.width) === el.dispositionX) {
          element.dispositionX -= element.step;
          el.life -= 1;
          if (el.life === 0) {
            redArmy.splice (index,1);
            count[1] += 1;
          };
        }
      });
    });
};