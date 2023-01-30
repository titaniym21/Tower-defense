import {blueArmy, blueTowers, redArmy, redTowers, count} from "./objects.js";

let crashTower = function () {
    redArmy.forEach ((element,index) => {
     if ((element.dispositionX + element.width) === blueTowers[0].dispositionX) {
        redArmy.splice (index,1);
        blueTowers[0].energy -= 10;
        count[2] += 10;
        if (blueTowers[0].energy === 0) {
                gameOver = false;
                console.log(gameOver);
        };
     };
    });

    blueArmy.forEach ((element,index) => {
        if ((element.dispositionX) === (redTowers[0].dispositionX + redTowers[0].width)) {
            blueArmy.splice (index,1);
            redTowers[0].energy -= 10;
            if (redTowers[0].energy === 0) {
                gameOver = false;
                console.log(gameOver);
            };
         };
    });
};

export { crashTower };
