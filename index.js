"use strict";

let elDiceOne = document.querySelector(".dice-one");
let elDiceTwo = document.querySelector(".dice-two");
let elComeOut = document.querySelector(".roll-button");

elComeOut.onClick = function () { rollDice();};

function rollDice() {
    let diceOne = Math.floor((Math.random() * 6) + 1);
    let diceTwo = Math.floor((Math.random() * 6) + 1);
      console.log(diceOne + " " + diceTwo);
      for (let index = 1; index <= 6; index++) {
          elDiceOne.classList.remove('show-' + index);
          if(diceOne === index){
              elDiceOne.classList.add('show-' + index);
          }
      }
      for (let index = 1; index <= 6; index++) {
          elDiceTwo.classList.remove('show-' + index);
          if(diceTwo === index){
              elDiceTwo.classList.add('show-' + index);
          }
      }
      setTimeout(rollDice(), 1000);
}


  

