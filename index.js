"use strict";

let elDiceOne = document.querySelector(".dice-one");
let elDiceTwo = document.querySelector(".dice-two");
let elComeOut = document.querySelector(".roll-button");

function handleClick() {
    let diceOne = Math.floor((Math.random() * 6) + 1);
    let diceTwo = Math.floor((Math.random() * 6) + 1);
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
/*        setTimeout(handleClick(), 1000); */
}

elComeOut.addEventListener("click", handleClick);






  

