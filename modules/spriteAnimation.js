import { arrayRedSoldiers } from "./objects.js";
import { arrayBlueSoldiers } from "./objects.js";
import { redTowers } from "./objects.js";
import { blueTowers } from "./objects.js";

let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;

const frameTime = 1000 / 30;


const test = new Image();
test.src = "img/test.png";
const spriteWidth = 50;
const spriteHeight = 50;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const frameCount = 10;

const redTowerSprite = new Image ();
redTowerSprite.src = "../img/red_tower.png";

const blueTowerSprite = new Image ();
blueTowerSprite.src = "../img/blue_tower.png";

function draw() {
    ctx.clearRect(0, 0, widthCtx, heightCtx);
    ctx.drawImage(redTowerSprite, 0, 0, 190, 450, 0, 100, 200, 450);
    ctx.drawImage(blueTowerSprite, 0, 0, 190, 450, 600, 115, 200, 450);
    ctx.drawImage(test, 0, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 560, 50, 50);
    ctx.drawImage(test, 50 , frameY * spriteHeight, spriteWidth, spriteHeight, 50, 560, 50, 50);
    ctx.drawImage(test, 100, frameY * spriteHeight, spriteWidth, spriteHeight, 100, 560, 50, 50);
    ctx.drawImage(test, 150, frameY * spriteHeight, spriteWidth, spriteHeight, 150, 560, 50, 50);
    ctx.drawImage(test, 200, frameY * spriteHeight, spriteWidth, spriteHeight, 200, 560, 50, 50);
    if (gameFrame % frameCount == 0) {
        frameY++;
        if (frameY > 3) {
            frameY = 0;
        }
    }
    gameFrame++;

    
    requestAnimationFrame(() => 
        setTimeout(draw, frameTime));
}

draw();
                    







