import { createSoldiers } from "./createNewUnit.js";
import { redArmy, blueArmy, pauseBoolean, gameOver} from "./objects.js";
import { allGame } from "./spriteAnimation.js";

let pauseButton = document.getElementById ('pause');

let pauseGame = function () {
     if (gameOver[0]) {
     if (pauseBoolean[0]) {
        pauseBoolean[0] = false;
     }
     else {
        pauseBoolean[0] = true;
        createSoldiers ('red',redArmy);
        createSoldiers ('blue',blueArmy);
        allGame ();
     };
   };
};

pauseButton.addEventListener ('click', pauseGame);