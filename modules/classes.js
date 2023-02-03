import {blueTowers, redTowers, pruningXMap, pruningYMap , spriteStepMap} from "./objects.js";
import { ctx } from "./spriteAnimation.js";

let redTowerLeft = new Image(2200 , 375);
redTowerLeft.src = "img/red_tower.png";

let blueTowerRight = new Image(2200 , 375);
blueTowerRight.src = "img/blue_tower.png";

let blueWalkingAll = new Image (1200,300);
blueWalkingAll.src = 'img/blue_walking_beat_all.png';

let blueWalkingWalk = new Image (1200,300);
blueWalkingWalk.src = 'img/blue_walking_beat_walk.png';

let blueWalkingFly = new Image (1200,300);
blueWalkingFly.src = 'img/blue_walking_beat_fly.png';

let blueFlyingWalk = new Image (1200,300);
blueFlyingWalk.src = 'img/blue_flying_beat_walk.png';

let blueFlyingFly = new Image (1200,300);
blueFlyingFly.src = 'img/blue_flying_beat_fly.png';

let redWalkingAll = new Image (1200,300);
redWalkingAll.src = 'img/red_walking_beat_all.png';

let redWalkingWalk = new Image (1200,300);
redWalkingWalk.src = 'img/red_walking_beat_walk.png';

let redWalkingFly = new Image (1200,300);
redWalkingFly.src = 'img/red_walking_beat_fly.png';

let redFlyingWalk = new Image (1200,300);
redFlyingWalk.src = 'img/red_flying_beat_walk.png';

let redFlyingFly = new Image (1200,300);
redFlyingFly.src = 'img/red_flying_beat_fly.png';



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
        return 6000;
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



// let spriteStep = function (team,functional,victim) {
//     if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
//         return 610;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
//         return 410;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
//         return 430;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
//         return 275;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
//         return 440;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
//         return 1050;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
//         return 528;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
//         return 520;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
//         return 260;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
//         return 256;
//     };
// };


spriteStepMap.set('blue', new Map());
spriteStepMap.get('blue').set('walking', new Map());
spriteStepMap.get('blue').get('walking').set('beatWalking', 610);
spriteStepMap.get('blue').get('walking').set('beatFlying', 410);
spriteStepMap.get('blue').get('walking').set('beatAll', 430);
spriteStepMap.get('blue').set('flying', new Map());
spriteStepMap.get('blue').get('flying').set('beatWalking', 275);
spriteStepMap.get('blue').get('flying').set('beatFlying', 440);
spriteStepMap.set('red', new Map());
spriteStepMap.get('red').set('walking', new Map());
spriteStepMap.get('red').get('walking').set('beatWalking', 1050);
spriteStepMap.get('red').get('walking').set('beatFlying', 528);
spriteStepMap.get('red').get('walking').set('beatAll', 520);
spriteStepMap.get('red').set('flying', new Map());
spriteStepMap.get('red').get('flying').set('beatWalking', 260);
spriteStepMap.get('red').get('flying').set('beatFlying', 256);

let spriteStep = function (team, functional, victim) {
    return spriteStepMap.get(team).get(functional).get(victim);
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
        return 90;
    }

    if (team === 'blue') {
        return 860;
    }
};

let positionUnitY = function (functional) {
    if (functional === 'flying') {
        return Math.floor(Math.random() * 250 + 200);
    }

    if (functional === 'walking') {
        return Math.floor(Math.random() * 130 + 400);
    
    }
};

// let pruningX = function (team,functional,victim) {
//     if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
//         return 530;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
//         return 430;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
//         return 390;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
//         return 270;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
//         return 410;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
//         return 950;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
//         return 500;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
//         return 500;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
//         return 255;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
//         return 255;
//     };
// };


pruningXMap.set('blue', new Map());
pruningXMap.get('blue').set('walking', new Map());
pruningXMap.get('blue').get('walking').set('beatWalking', 530);
pruningXMap.get('blue').get('walking').set('beatFlying', 430);
pruningXMap.get('blue').get('walking').set('beatAll', 390);
pruningXMap.get('blue').set('flying', new Map());
pruningXMap.get('blue').get('flying').set('beatWalking', 270);
pruningXMap.get('blue').get('flying').set('beatFlying', 410);
pruningXMap.set('red', new Map());
pruningXMap.get('red').set('walking', new Map());
pruningXMap.get('red').get('walking').set('beatWalking', 950);
pruningXMap.get('red').get('walking').set('beatFlying', 500);
pruningXMap.get('red').get('walking').set('beatAll', 500);
pruningXMap.get('red').set('flying', new Map());
pruningXMap.get('red').get('flying').set('beatWalking', 255);
pruningXMap.get('red').get('flying').set('beatFlying', 255);


let pruningX = function (team,functional,victim) {
    return pruningXMap.get(team).get(functional).get(victim);
};


// let pruningY = function (team,functional,victim) {
//     if (team === 'blue' && functional === 'walking' && victim === 'beatWalking') {
//         return 619;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatFlying') {
//         return 500;
//     };
//     if (team === 'blue' && functional === 'walking' && victim === 'beatAll') {
//         return 500;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatWalking') {
//         return 270;
//     };
//     if (team === 'blue' && functional === 'flying' && victim === 'beatFlying') {
//         return 580;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatWalking') {
//         return 970;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatFlying') {
//         return 580;
//     };
//     if (team === 'red' && functional === 'walking' && victim === 'beatAll') {
//         return 570;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatWalking') {
//         return 255;
//     };
//     if (team === 'red' && functional === 'flying' && victim === 'beatFlying') {
//         return 255;
//     };
// };




pruningYMap.set('blue', new Map());
pruningYMap.get('blue').set('walking', new Map());
pruningYMap.get('blue').get('walking').set('beatWalking', 619);
pruningYMap.get('blue').get('walking').set('beatFlying', 500);
pruningYMap.get('blue').get('walking').set('beatAll', 500);
pruningYMap.get('blue').set('flying', new Map());
pruningYMap.get('blue').get('flying').set('beatWalking', 270);
pruningYMap.get('blue').get('flying').set('beatFlying', 580); 
pruningYMap.set('red', new Map());
pruningYMap.get('red').set('walking', new Map());
pruningYMap.get('red').get('walking').set('beatWalking', 970);
pruningYMap.get('red').get('walking').set('beatFlying', 580);
pruningYMap.get('red').get('walking').set('beatAll', 570);
pruningYMap.get('red').set('flying', new Map());
pruningYMap.get('red').get('flying').set('beatWalking', 255);
pruningYMap.get('red').get('flying').set('beatFlying', 255);


let pruningY = function (team,functional,victim) {
    return pruningYMap.get(team).get(functional).get(victim);
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
		this.dispositionY = 200;
        this.energy = 100;
        this.xSprite = 0;
        this.width = 200;
    }

    draw () {
        if (this.team === 'blue') {
            ctx.drawImage(blueTowerRight, this.xSprite, 0, 200, 375, this.dispositionX, this.dispositionY, this.width, 375 );
        }
        if (this.team === 'red') {
            ctx.drawImage(redTowerLeft, this.xSprite, 0, 200, 375, this.dispositionX, this.dispositionY, this.width, 375);
        }
        ctx.fillStyle = "gold";
        ctx.font = "40px Orbital";
        ctx.fillText(Math.floor(this.energy), this.dispositionX + 40, this.dispositionY + 350);
    }
}

let redTower = new Tower('red', 0);
let blueTower = new Tower('blue', 880);

redTowers.push(redTower);
blueTowers.push(blueTower);





