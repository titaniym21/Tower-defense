import { redTowers } from "./objects.js";
import { blueTowers } from "./objects.js";

export class Unit {
	constructor (functional,team,victim,sprite) {
		this.functional = functional;
		this.victim = victim;
		this.team = team;
		this.sprite = sprite;
		this.life = 5; // или уровень жизни, если решим, что Юнит гибнет постепенно
		this.step = (function () {
			if (team === 'red') {
				return 2;
			};
			if (team === 'blue') {
				return -2;
			};
        }) ();
		this.dispositionX = (function () {
            if (team === 'red') {
				return 100;
			};
			if (team === 'blue') {
				return 500;
			};
        }) ();
        this.dispositionY = (function () {
			if (functional === 'flying') {
				return 100;
			};
			if (functional === 'walking') {
				return 500;
			};
        }) ();
	}
	
	/*attackOnTheVictim () {
		allOnTheVictim (this.team,this.victim,this.functional); // вызываем в методе фабрику Атаки Врага, передавая указанные параметры. С контекстом поиграемся, чтобы не потерять
	}

	attackOnTheTower () {
		allOnTheTower (this.team,this.disposition); // вызываем в методе фабрику Атаки Башни, передавая указанные параметры. С контекстом поиграемся, чтобы не потерять
	}
	
	moving () {
		allMoving (this.team,this.disposition); // вызываем в методе фабрику Движения Юнитов, передавая указанные параметры. С контекстом поиграемся, чтобы не потерять
	}

	dead () {
		allDead (this,this.life); // вызываем в методе фабрику Гибели Юнита, передавая указанные параметры. С контекстом поиграемся, чтобы не потерять
	}*/
};

class Tower {
	constructor (team,disposition) {
		this.team = team;
		this.dispositionX = disposition;
		this.energy = 100;
    }

	/*destruction () {
		deadTower (this.team,this.energy); // вызываем в методе фабрику Разрушения Башни, передавая указанные параметры. С контекстом поиграемся, чтобы не потерять
	}*/
};

let redTower = new Tower ('red', 100);
let blueTower = new Tower ('blue',500);

redTowers.push (redTower);
blueTowers.push (blueTower);

