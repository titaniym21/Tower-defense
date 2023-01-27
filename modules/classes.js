import { arrayRedSoldiers } from "./objects.js";
import { arrayBlueSoldiers } from "./objects.js";
import { redTowers } from "./objects.js";
import { blueTowers } from "./objects.js";

class Unit {
	constructor (functional,team,victim) {
		this.functional = functional;
		this.victim = victim;
		this.team = team;
		this.life = true; // или уровень жизни, если решим, что Юнит гибнет постепенно
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

let flyingRedAttackedFly = new Unit ('flying','red','beatFlying');
let flyingRedAttackedWalk = new Unit ('flying','red','beatWalking');
let walkingRedAttackedFly = new Unit ('walking','red','beatFlying');
let walkingRedAttackedWalk = new Unit ('walking','red','beatWalking');
let walkingRedAttackedAll = new Unit ('walking','red','beatAll');

arrayRedSoldiers.push (flyingRedAttackedFly);
arrayRedSoldiers.push (flyingRedAttackedWalk);
arrayRedSoldiers.push (walkingRedAttackedFly);
arrayRedSoldiers.push (walkingRedAttackedWalk);
arrayRedSoldiers.push (walkingRedAttackedAll);

let flyingBlueAttackedFly = new Unit ('flying','blue','beatFlying');
let flyingBlueAttackedWalk = new Unit ('flying','blue','beatWalking');
let walkingBlueAttackedFly = new Unit ('walking','blue','beatFlying');
let walkingBlueAttackedWalk = new Unit ('walking','blue','beatWalking');
let walkingBlueAttackedAll = new Unit ('walking','blue','beatAll');

arrayBlueSoldiers.push (flyingBlueAttackedFly);
arrayBlueSoldiers.push (flyingBlueAttackedWalk);
arrayBlueSoldiers.push (walkingBlueAttackedFly);
arrayBlueSoldiers.push (walkingBlueAttackedWalk);
arrayBlueSoldiers.push (walkingBlueAttackedAll);

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

