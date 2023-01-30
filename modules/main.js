//import { draw } from "./spriteAnimation.js";

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const restartButton = document.getElementById('restart');


startButton.addEventListener('click', () => {
    console.log('start');
    draw();
});

restartButton.addEventListener('click', () => {
    console.log('restart');
    window.location.reload();
});

