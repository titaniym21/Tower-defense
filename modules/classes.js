import {blueTowers, redTowers} from "./objects.js";
import {ctx} from "./spriteAnimation.js";

let redTowerLeft = new Image(2200, 375);
redTowerLeft.src = "img/red_tower.png";

let blueTowerRight = new Image(2200, 375);
blueTowerRight.src = "img/blue_tower.png";

let blueWalkingAll = new Image(1200, 300);
blueWalkingAll.src = "img/blue_walking_beat_all.png";

let blueWalkingWalk = new Image(1200, 300);
blueWalkingWalk.src = "img/blue_walking_beat_walk.png";

let blueWalkingFly = new Image(1200, 300);
blueWalkingFly.src = "img/blue_walking_beat_fly.png";

let blueFlyingWalk = new Image(1200, 300);
blueFlyingWalk.src = "img/blue_flying_beat_walk.png";

let blueFlyingFly = new Image(1200, 300);
blueFlyingFly.src = "img/blue_flying_beat_fly.png";

let redWalkingAll = new Image(1200, 300);
redWalkingAll.src = "img/red_walking_beat_all.png";

let redWalkingWalk = new Image(1200, 300);
redWalkingWalk.src = "img/red_walking_beat_walk.png";

let redWalkingFly = new Image(1200, 300);
redWalkingFly.src = "img/red_walking_beat_fly.png";

let redFlyingWalk = new Image(1200, 300);
redFlyingWalk.src = "img/red_flying_beat_walk.png";

let redFlyingFly = new Image(1200, 300);
redFlyingFly.src = "img/red_flying_beat_fly.png";

// конструктор объекта
function objConstructor(
    sprites,
    xLastPositionSprite,
    spriteStep,
    pruningX,
    pruningY
) {
  this.sprites = sprites;
  this.xLastPositionSprite = xLastPositionSprite;
  this.spriteStep = spriteStep;
  this.pruningX = pruningX;
  this.pruningY = pruningY;
}

// создание объектов
let blueWalkingWalkObj = new objConstructor(blueWalkingWalk, 12000, 610, 530, 619);
let blueWalkingFlyObj = new objConstructor(blueWalkingFly, 4240, 410, 430, 500);
let blueWalkingAllObj = new objConstructor(blueWalkingAll, 3500, 430, 390, 500);
let blueFlyingWalkObj = new objConstructor(blueFlyingWalk, 3175, 275, 270, 270);
let blueFlyingFlyObj = new objConstructor(blueFlyingFly, 12500, 440, 410, 580);
let redWalkingWalkObj = new objConstructor(redWalkingWalk, 12600, 1050, 950, 970);
let redWalkingFlyObj = new objConstructor(redWalkingFly, 6000, 528, 500, 580);
let redWalkingAllObj = new objConstructor(redWalkingAll, 4680, 520, 500, 570);
let redFlyingWalkObj = new objConstructor(redFlyingWalk, 2600, 260, 255, 255);
let redFlyingFlyObj = new objConstructor(redFlyingFly, 3072, 256, 255, 255);

let objMap = new Map();
objMap.set("blue", new Map());
objMap.get("blue").set("walking", new Map());
objMap.get("blue").get("walking").set("beatWalking", blueWalkingWalkObj);
objMap.get("blue").get("walking").set("beatFlying", blueWalkingFlyObj);
objMap.get("blue").get("walking").set("beatAll", blueWalkingAllObj);
objMap.get("blue").set("flying", new Map());
objMap.get("blue").get("flying").set("beatWalking", blueFlyingWalkObj);
objMap.get("blue").get("flying").set("beatFlying", blueFlyingFlyObj);
objMap.set("red", new Map());
objMap.get("red").set("walking", new Map());
objMap.get("red").get("walking").set("beatWalking", redWalkingWalkObj);
objMap.get("red").get("walking").set("beatFlying", redWalkingFlyObj);
objMap.get("red").get("walking").set("beatAll", redWalkingAllObj);
objMap.get("red").set("flying", new Map());
objMap.get("red").get("flying").set("beatWalking", redFlyingWalkObj);
objMap.get("red").get("flying").set("beatFlying", redFlyingFlyObj);

let sprites = function (team, functional, victim) {
  return objMap.get(team).get(functional).get(victim).sprites;
};

let xLastPositionSprite = function (team, functional, victim) {
  return objMap.get(team).get(functional).get(victim).xLastPositionSprite;
};

let spriteStep = function (team, functional, victim) {
  return objMap.get(team).get(functional).get(victim).spriteStep;
};

let pruningX = function (team, functional, victim) {
  return objMap.get(team).get(functional).get(victim).pruningX;
};

let pruningY = function (team, functional, victim) {
  return objMap.get(team).get(functional).get(victim).pruningY;
};

let speed = function (team, functional) {
  if (team === "blue" && functional === "walking") {
    return -2;
  }
  if (team === "red" && functional === "walking") {
    return 2;
  }
  if (team === "blue" && functional === "flying") {
    return -3;
  }
  if (team === "red" && functional === "flying") {
    return 3;
  }
};

let positionUnitX = function (team) {
  if (team === "red") {
    return 90;
  }

  if (team === "blue") {
    return 860;
  }
};

let positionUnitY = function (functional) {
  if (functional === "flying") {
    return Math.floor(Math.random() * 250 + 200);
  }

  if (functional === "walking") {
    return Math.floor(Math.random() * 130 + 400);
  }
};

//--------------------------------------------------------------
export class Unit {
  constructor(functional, team, victim) {
    this.functional = functional;
    this.victim = victim;
    this.team = team;
    this.life = 10;
    this.step = speed(this.team, this.functional);
    this.sprite = sprites(this.team, this.functional, this.victim);
    this.stepSprite = spriteStep(this.team, this.functional, this.victim);
    this.lastSpritePosition = xLastPositionSprite(
        this.team,
        this.functional,
        this.victim
    );
    this.xSprite = 0;
    this.ySprite = 0;
    this.xPruning = pruningX(this.team, this.functional, this.victim);
    this.yPruning = pruningY(this.team, this.functional, this.victim);
    this.width = 70;
    this.height = 75;
    this.dispositionX = positionUnitX(this.team);
    this.dispositionY = positionUnitY(this.functional);
  }

  draw() {
    ctx.drawImage(
        this.sprite,
        this.xSprite,
        this.ySprite,
        this.xPruning,
        this.yPruning,
        this.dispositionX,
        this.dispositionY,
        this.width,
        this.height
    );
    this.xSprite += this.stepSprite;
    if (this.xSprite > this.lastSpritePosition && this.stepSprite > 0) {
      this.xSprite = 0;
    }
    if (this.xSprite < this.lastSpritePosition && this.stepSprite < 0) {
      this.xSprite = 0;
    }
  }
}

class Tower {
  constructor(team, dispositionX) {
    this.team = team;
    this.dispositionX = dispositionX;
    this.dispositionY = 250;
    this.energy = 100;
    this.xSprite = 0;
    this.width = 200;
  }

  draw() {
    if (this.team === "blue") {
      ctx.drawImage(
          blueTowerRight,
          this.xSprite,
          0,
          200,
          375,
          this.dispositionX,
          this.dispositionY,
          this.width,
          375
      );
    }
    if (this.team === "red") {
      ctx.drawImage(
          redTowerLeft,
          this.xSprite,
          0,
          200,
          375,
          this.dispositionX,
          this.dispositionY,
          this.width,
          375
      );
    }
    ctx.fillStyle = "gold";
    ctx.font = "40px Orbital";
    ctx.fillText(
        Math.floor(this.energy),
        this.dispositionX + 40,
        this.dispositionY + 300
    );
  }
}

let redTower = new Tower("red", 0);
let blueTower = new Tower("blue", 880);

redTowers.push(redTower);
blueTowers.push(blueTower);
