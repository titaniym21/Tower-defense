import { Unit } from "./classes.js";
import {redArmy, blueArmy, pauseBoolean, gameOver, countRed, countBlue} from "./objects.js";

let createSoldiers = function (team, toArmy) {
    if (pauseBoolean[0] && gameOver[0]) {
        let randomSoldier = Math.floor(Math.random() * 5);
    let newSoldier;
    switch (randomSoldier) {
        case 0: {
            newSoldier = new Unit('flying', team, 'beatFlying');
            break
        }

        case 1: {
            newSoldier = new Unit('flying', team, 'beatWalking');
            break
        }

        case 2: {
            newSoldier = new Unit('walking', team, 'beatFlying');
            break
        }

        case 3: {
            newSoldier = new Unit('walking', team, 'beatWalking');
            break
        }

        case 4: {
            newSoldier = new Unit('walking', team, 'beatAll');
        }

    }

    toArmy.push(newSoldier);

    if (team === 'blue') {
        countBlue[0] += 1;
    }
    if (team === 'red') {
        countRed[0] += 1;
    }

    setTimeout(() => {
        createSoldiers(team, toArmy)
    }, Math.floor((Math.random() * 501) + 500));
   }
};

export { createSoldiers };

createSoldiers ('red',redArmy);
createSoldiers ('blue',blueArmy);

