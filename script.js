"use strict";
const score_0 =document.querySelector("#score--0");
const score_1 = document.getElementById("score--1");

const dice =  document.querySelector(".dice");
const btn_roll = document.querySelector(".btn--roll");
const btn_new = document.querySelector(".btn--new");

const btn_hold = document.querySelector(".btn--hold");
const curent_0 =document.getElementById("current--0");
const curent_1 =document.getElementById("current--1");

const player_0 =document.querySelector(".player--0")
const player_1 =document.querySelector(".player--1")

let curentscore,activePlayer,isGamePlaying,scores;

function Int(){
 curentscore =0;
 activePlayer =0;
isGamePlaying =true;
scores =[0,0];
score_0.textContent = 0;
score_1.textContent = 0;

dice.classList.add("hidden");
document.querySelector(`.player--0`).classList.add("player--active");
document.querySelector(`.player--1`).classList.remove("player--active");
document.querySelector(`.player--0`).classList.remove("player--winner");
document.querySelector(`.player--1`).classList.remove("player--winner");
document.getElementById(`current--0`).textContent =curentscore;
document.getElementById(`current--1`).textContent =curentscore;
}
Int();

function swichplayer(){
    curentscore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =curentscore;
    activePlayer = activePlayer ==0? 1 :0;
    player_0.classList.toggle("player--active");
    player_1.classList.toggle("player--active");
}



dice.classList.add("hidden");
btn_roll.addEventListener("click",function(){
    if(isGamePlaying){
        dice.classList.remove("hidden"); 
        const diceRandomNumber =Math.trunc(Math.random()*6 +1);
        dice.src =`dice-${diceRandomNumber}.png` ;
    
       if(diceRandomNumber !==1){
        curentscore +=diceRandomNumber;
        document.getElementById(`current--${activePlayer}`).textContent =curentscore;
    
       }else{
        swichplayer();  
       }
    }  
});
btn_hold.addEventListener("click",function(){
    if(isGamePlaying){
        scores[activePlayer] +=curentscore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if(scores[activePlayer] >= 50){
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            dice.classList.add("hidden");
            isGamePlaying = false;
        }else{
            swichplayer();
        } 
    }
});
btn_new.addEventListener("click",Int)



