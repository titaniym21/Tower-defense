import {blueTowers, redTowers} from "./objects.js";
import { ctx } from "./spriteAnimation.js";

let blueWalkingAll = new Image (1200,300);
blueWalkingAll.src = '../img/blue_walking_beat_all.png';

let blueWalkingWalk = new Image (1200,300);
blueWalkingWalk.src = '../img/blue_walking_beat_walk.png';

let blueWalkingFly = new Image (1200,300);
blueWalkingFly.src = '../img/blue_walking_beat_fly.png';

let blueFlyingWalk = new Image (1200,300);
blueFlyingWalk.src = '../img/blue_flying_beat_walk.png';

let blueFlyingFly = new Image (1200,300);
blueFlyingFly.src = '../img/blue_flying_beat_fly.png';

let redWalkingAll = new Image (1200,300);
redWalkingAll.src = '../img/red_walking_beat_all.png';

let redWalkingWalk = new Image (1200,300);
redWalkingWalk.src = '../img/red_walking_beat_walk.png';

let redWalkingFly = new Image (1200,300);
redWalkingFly.src = '../img/red_walking_beat_fly.png';

let redFlyingWalk = new Image (1200,300);
redFlyingWalk.src = '../img/red_flying_beat_walk.png';

let redFlyingFly = new Image (1200,300);
redFlyingFly.src = '../img/red_flying_beat_fly.png';



let sprites = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return blueWalkingWalk;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return blueWalkingFly;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return blueWalkingAll;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return blueFlyingWalk;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return blueFlyingFly;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return redWalkingWalk;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return redWalkingFly;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return redWalkingAll;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return redFlyingWalk;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return redFlyingFly;
    };
};

let xLastPositionSprite = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 12000;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 4240;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 3500;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 3175;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 12500;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 12600;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 12600;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 4680;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 2600;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 3072;
    };
};

let spriteStep = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 610;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 410;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 430;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 275;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 440;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 1050;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 528;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 520;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 260;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 256;
    };
};

let speed = function (team,functional) {
    if (team === 'blue' && functional === 'walking') {
        return -2;
    };
    if (team === 'red' && functional === 'walking') {
        return 2;
    };
    if (team === 'blue' && functional === 'flying') {
        return -3;
    };
    if (team === 'red' && functional === 'flying') {
        return 3;
    };
};

let positionUnitX = function (team) {
    if (team === 'red') {
        return 190;
    }

    if (team === 'blue') {
        return 750;
    }
};

let positionUnitY = function (functional) {
    if (functional === 'flying') {
        return 300;
    }

    if (functional === 'walking') {
        return 500;
    }
};

let pruningX = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 530;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 430;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 390;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 270;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 410;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 950;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 500;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 500;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 255;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 255;
    };
};

let pruningY = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 619;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 500;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 500;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 270;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 580;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 970;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 580;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 570;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 255;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 255;
    };
};

export class Unit {
    constructor(functional, team, victim) {
        this.functional = functional;
        this.victim = victim;
        this.team = team;
        this.life = 10; 
        this.step = speed (this.team,this.functional);
        this.sprite = sprites (this.team,this.functional,this.victim);
        this.stepSprite = spriteStep (this.team,this.functional,this.victim);
        this.lastSpritePosition = xLastPositionSprite (this.team,this.functional,this.victim);
        this.xSprite = 0;
        this.ySprite = 0;
        this.xPruning = pruningX (this.team,this.functional,this.victim);
        this.yPruning = pruningY (this.team,this.functional,this.victim);
		this.width = 70;
		this.height = 75;
        this.dispositionX = positionUnitX (this.team);
        this.dispositionY = positionUnitY (this.functional);
    }

    draw () {
        ctx.drawImage(this.sprite, this.xSprite, this.ySprite, this.xPruning, this.yPruning, this.dispositionX, this.dispositionY, this.width, this. height);
        this.xSprite += this.stepSprite;
        if ((this.xSprite > this.lastSpritePosition) && (this.stepSprite > 0) ) {
            this.xSprite = 0;
        };
        if ((this.xSprite < this.lastSpritePosition) && (this.stepSprite < 0) ) {
            this.xSprite = 0;
        };
    }
};

class Tower {
    constructor(team, dispositionX) {
        this.team = team;
        this.dispositionX = dispositionX;
		this.dispositionY = 300;//условно;
        this.energy = 100;
		this.width = 190;
		this.height = 450;
    }

    draw () {
        ctx.fillStyle = this.team;
        ctx.fillRect (this.dispositionX, this.dispositionY, this.width, this. height);

        ctx.fillStyle = "gold";
        ctx.font = "40px Orbital";
        ctx.fillText(Math.floor(this.energy), this.dispositionX + 60, this.dispositionY + 60);
    }
}

let redTower = new Tower('red', 0);
let blueTower = new Tower('blue', 810);

redTowers.push(redTower);
blueTowers.push(blueTower);





