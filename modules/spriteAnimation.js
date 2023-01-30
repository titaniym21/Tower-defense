import {blueArmy, blueTowers, redArmy, redTowers, count, pauseBoolean} from "./objects.js";
import { clashArmy1, clashArmy2, moveSoldiers } from "./moveSoldiers.js";
import { crashTower } from "./atackedTower.js";

let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;
/*// частота кадрів
const frameTime = 1000 / 30;


const test = new Image();
test.src = "img/test.png";
// размеры юнитов в спрайте
const spriteWidth = 50;
const spriteHeight = 50;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
//кількість кадрів в анімації
const frameCount = 100;


const redTowerSprite = new Image();
redTowerSprite.src = "img/red_tower.png";

const blueTowerSprite = new Image();
blueTowerSprite.src = "img/blue_tower.png";
// размеры башен в спрайте
const spriteWidthTower = 198;
const spriteHeightTower = 450;

//функція для відображення спрайтів обовязково використовувати кількість кадрів в рядку і вертикально або горизонталдьно
// послідосвність рядків
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH, colSprites, rowSprites) {
    if (rowSprites === 'vertical') {
        ctx.drawImage(img, sX, sY * sH, sW, sH, dX, dY, dW, dH);
        //перебір кадрів
        if (gameFrame % frameCount === 0) {
            frameY++;
            if (frameY > colSprites-1) {
                frameY = 0;
            }
        }
        
    }
    if (rowSprites === 'horizontal') {
        ctx.drawImage(img, sX * sW, sY, sW, sH, dX, dY, dW, dH);
        //перебір кадрів
        if (gameFrame % frameCount === 0) {
            frameX++;
            if (frameX > colSprites-1) {
                frameX = 0;
            }
        }
    }

    console.log(gameFrame);
    return gameFrame++;

}


let tmp = null;


function draw() {
    requestAnimationFrame(() => setTimeout(draw(tmp), frameTime));
    ctx.clearRect(0, 0, widthCtx, heightCtx);
    drawSprite(test, 0, frameY, spriteWidth, spriteHeight, 100, 560, 50, 50, 3, 'vertical');
    drawSprite(redTowerSprite, frameX, frameY, spriteWidthTower, spriteHeightTower, 0, 150, 100, 450, 5, 'horizontal');
    drawSprite(blueTowerSprite, frameX, frameY, spriteWidthTower, spriteHeightTower, 900, 165, 100, 450, 5, 'horizontal');
    drawSprite(test, 1 * spriteWidth, frameY, spriteWidth, spriteHeight, 150, 560, 50, 50, 3, 'vertical');
    drawSprite(test, 2 * spriteWidth, frameY, spriteWidth, spriteHeight, 200, 560, 50, 50, 3, 'vertical');
    drawSprite(test, 3 * spriteWidth, frameY, spriteWidth, spriteHeight, 250, 560, 50, 50, 3, 'vertical');
    drawSprite(test, 4 * spriteWidth, frameY, spriteWidth, spriteHeight, 300, 560, 50, 50, 3, 'vertical');
      
}

// function startDraw() {
//     if (frameId) { return; }
//     frameId = requestAnimationFrame(() => {
//       perFrame(event);
//     });
// }

// function stopDraw() {
//     cancelAnimationFrame(frameId);
//     frameId = null;
// }
//draw();
              

export { draw };*/
let gameOver = true;
let renderingArmy = function (army) {
    army.forEach(element => {
        element.draw ();
    });
};

let renderingTowers = function (tower) {
    tower.forEach(element => {
        element.draw ();
    });
};

let allGame = function () {
    if (pauseBoolean[0]) {
        moveSoldiers(blueArmy);
        moveSoldiers(redArmy);
        clashArmy1();
        clashArmy2();
        crashTower();
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        renderingTowers(redTowers);
        renderingTowers(blueTowers);
        renderingArmy(redArmy);
        renderingArmy(blueArmy);
        requestAnimationFrame (allGame);
        if (!gameOver) requestAnimationFrame(allGame);
    };
};

let allPaint = requestAnimationFrame (allGame);

setInterval (() => {
    console.log (blueTowers[0].energy);
    console.log (redTowers[0].energy);
    console.log (redArmy.length);
    console.log (blueArmy.length);
},1000);

export { allGame };
export { ctx };








