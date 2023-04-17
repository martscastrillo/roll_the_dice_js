"use strict";

let elDiceOne = document.getElementById("dice1");
let elDiceTwo = document.getElementById("dice2");
let elComeOut = document.getElementById("roll");



elComeOut.addEventListener("click", ()=>{
  let diceOne = Math.floor((Math.random() * 6) + 1);
  let diceTwo = Math.floor((Math.random() * 6) + 1);
    console.log(diceOne + "" + diceTwo);
    for (let index = 0; index <= index; index++) {
        elDiceOne.classList.remove('show-' + index);
        if(diceOne === index){
            elDiceOne.classList.add('show-' + index);
        }
    }
    for (let index = 0; index <= index; index++) {
        elDiceTwo.classList.remove('show-' + index);
        if(diceTwo === index){
            elDiceTwo.classList.add('show-' + index);
        }
    }
    setTimeout(rollDice(), 1000);
});
