import { createSoldiers } from "./createNewUnit.js";
import { redArmy, blueArmy } from "./objects.js";

let pauseButton = document.getElementById ('pause');

let pauseBoolean = true;

export { pauseBoolean };

let pauseGame = function () {
     
     if (pauseBoolean) {
        pauseBoolean = false;
     }
     else {
        pauseBoolean = true;
        createSoldiers ('red',redArmy);
        createSoldiers ('blue',blueArmy);
     };
};

pauseButton.addEventListener ('click', pauseGame);