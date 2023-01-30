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
        this.life = 2; // или уровень жизни, если решим, что Юнит гибнет постепенно
        this.step = (function () {
            if (team === 'red') {
                return 1;
            }

            if (team === 'blue') {
                return -1;
            }

        })();
        this.dispositionX = (function () {
            if (team === 'red') {
                return 200;
            }

            if (team === 'blue') {
                return 500;
            }

        })();
        this.dispositionY = (function () {
            if (functional === 'flying') {
                return 100;
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
    }
}

let redTower = new Tower('red', 100);
let blueTower = new Tower('blue', 500);

redTowers.push(redTower);
blueTowers.push(blueTower);

