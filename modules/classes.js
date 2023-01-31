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
        return blueWalkingAll;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return blueWalkingAll;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return blueWalkingAll;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return blueWalkingAll;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return blueWalkingAll;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return blueWalkingAll;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return blueWalkingAll;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return blueWalkingAll;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return blueWalkingAll;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return blueWalkingAll;
    };
};

let xFirstPositionSprite = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 10;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 10;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 10;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 10;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 10;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 10;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 10;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 10;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 10;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 10;
    };
};

let yFirstPositionSprite = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 210;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 210;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 210;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 210;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 210;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 210;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 210;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 210;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 210;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 210;
    };
};

let xLastPositionSprite = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 800;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 800;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 800;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 800;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 800;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 800;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 800;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 800;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 800;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 800;
    };
};

let spriteStep = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 144;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 144;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 144;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 144;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 144;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 144;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 144;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 144;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 144;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 144;
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
        return 120;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 120;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 120;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 120;
    };
};

let pruningY = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 120;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 120;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 120;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 120;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 120;
    };
};

let widthSoldier = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 60;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 60;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 60;
    };
};

let heightSoldier = function (team,functional,victim) {
    if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
        return 60;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
        return 60;
    };
    if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
        return 60;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
        return 60;
    };
    if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
        return 60;
    };
};

export class Unit {
    constructor(functional, team, victim) {
        this.functional = functional;
        this.victim = victim;
        this.team = team;
        this.life = 3; 
        this.step = speed (this.team,this.functional);
        this.sprite = sprites (this.team,this.functional,this.victim);
        this.stepSprite = spriteStep (this.team,this.functional,this.victim);
        this.lastSpritePosition = xLastPositionSprite (this.team,this.functional,this.victim);
        this.firstSpritePosition = xFirstPositionSprite (this.team,this.functional,this.victim);
        this.xSprite = this.firstSpritePosition;
        this.ySprite = yFirstPositionSprite (this.team,this.functional,this.victim);
        this.xPruning = pruningX (this.team,this.functional,this.victim);
        this.yPruning = pruningY (this.team,this.functional,this.victim);
		this.width = widthSoldier (this.team,this.functional,this.victim);
		this.height = heightSoldier (this.team,this.functional,this.victim);
        this.dispositionX = positionUnitX (this.team);
        this.dispositionY = positionUnitY (this.functional);
    }

    draw () {
        ctx.drawImage(this.sprite, this.xSprite, this.ySprite, this.xPruning, this.yPruning, this.dispositionX, this.dispositionY, this.width, this. height);
        this.xSprite += this.stepSprite;
        if ((this.xSprite > this.lastSpritePosition) && (this.stepSprite > 0) ) {
            this.xSprite = this.firstSpritePosition;
        };
        if ((this.xSprite < this.lastSpritePosition) && (this.stepSprite < 0) ) {
            this.xSprite = this.firstSpritePosition;
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





