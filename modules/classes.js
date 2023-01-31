import {blueTowers, redTowers} from "./objects.js";
import { ctx } from "./spriteAnimation.js";

let blueWalkingAll = new Image (50,50);
blueWalkingAll.src = '../img/blue_walking_beat_all.png';

let blueWalkingWalk = new Image (50,50);
blueWalkingWalk.src = '../img/blue_walking_beat_walk.png';

let blueWalkingFly = new Image (50,50);
blueWalkingFly.src = '../img/blue_walking_beat_fly.png';

let blueFlyingWalk = new Image (50,50);
blueFlyingWalk.src = '../img/blue_flying_beat_walk.png';

let blueFlyingFly = new Image (50,50);
blueFlyingFly.src = '../img/blue_flying_beat_fly.png';

let redWalkingAll = new Image (50,50);
redWalkingAll.src = '../img/red_walking_beat_all.png';

let redWalkingWalk = new Image (50,50);
redWalkingWalk.src = '../img/red_walking_beat_walk.png';

let redWalkingFly = new Image (50,50);
redWalkingFly.src = '../img/red_walking_beat_fly.png';

let redFlyingWalk = new Image (50,50);
redFlyingWalk.src = '../img/red_flying_beat_walk.png';

let redFlyingFly = new Image (50,50);
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

export class Unit {
    constructor(functional, team, victim) {
        this.functional = functional;
        this.victim = victim;
        this.team = team;
        this.life = 3; 
        this.step = speed (this.team,this.functional);
        this.sprite = sprites (this.team,this.functional,this.victim);
        this.xSprite = 10;
        this.stepSprite = 144;
		this.width = 60;
		this.height = 60;
        this.dispositionX = positionUnitX (this.team);
        this.dispositionY = positionUnitY (this.functional);
    }

    draw () {
        ctx.drawImage(blueWalkingAll, this.xSprite, 210, 120, 120, this.dispositionX, this.dispositionY, this.width, this. height);
        this.xSprite += this.stepSprite;
        if (this.xSprite > 800 ) {
        this.xSprite = 10;
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





