import { redArmy } from "./objects.js";
import { blueArmy } from "./objects.js";
import { Unit } from "./classes.js";

let createSoldiers = function (team,toArmy) {
    let randomSoldier = Math.floor(Math.random()*5); 
    let newSoldier;
        switch (randomSoldier) {
            case 0: {
                newSoldier = new Unit ('flying',team,'beatFlying');
                break
            };
            case 1: {
                newSoldier = new Unit ('flying',team,'beatWalking');
                break
            };
            case 2: {
                newSoldier = new Unit ('walking',team,'beatFlying');
                break
            };
            case 3: {
                newSoldier = new Unit ('walking',team,'beatWalking');
                break
            };
            case 4: {
                newSoldier = new Unit ('walking',team,'beatAll');
            };  
        };
        toArmy.push (newSoldier);
        console.log (toArmy);

   
    setTimeout (() => {createSoldiers(team,toArmy)},Math.floor((Math.random() * 501) + 500));
};

//createSoldiers ('red',redArmy);
//createSoldiers ('blue',blueArmy);

