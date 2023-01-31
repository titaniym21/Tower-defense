import {blueTowers, redTowers} from "./objects.js";
import { ctx } from "./spriteAnimation.js";

export class Unit {
    constructor(functional, team, victim, sprite) {
        this.functional = functional;
        this.victim = victim;
        this.team = team;
        this.sprite = sprite;
		this.width = 10;
		this.height = 10;
        this.life = 3; // или уровень жизни, если решим, что Юнит гибнет постепенно
        this.step = (function () {
            if (team === 'red') {
                return 2;
            }

            if (team === 'blue') {
                return -2;
            }

        })();
        this.dispositionX = (function () {
            if (team === 'red') {
                return 190;
            }

            if (team === 'blue') {
                return 810;
            }

        })();
        this.dispositionY = (function () {
            if (functional === 'flying') {
                return 300;
            }

            if (functional === 'walking') {
                return 500;
            }

        })();
    }

    draw () {
        ctx.fillStyle = this.team;
        ctx.fillRect (this.dispositionX, this.dispositionY, this.width, this. height);
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

// console.log(redTower.draw());



