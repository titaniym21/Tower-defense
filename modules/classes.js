import {blueTowers, redTowers} from "./objects.js";

export class Unit {
    constructor(functional, team, victim, sprite) {
        this.functional = functional;
        this.victim = victim;
        this.team = team;
        this.sprite = sprite;
		this.width = 20;
		this.heighth = 25;
        this.life = 5; // или уровень жизни, если решим, что Юнит гибнет постепенно
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
                return 100;
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

    }
}

let redTower = new Tower('red', 100);
let blueTower = new Tower('blue', 500);

redTowers.push(redTower);
blueTowers.push(blueTower);

