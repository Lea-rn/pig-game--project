"use strict"

///// import elements ::: 
let score0 = document.querySelector(".score-0")
let score1 = document.querySelector(".score-1")

let diceImg = document.querySelector("img")
const rollBtn = document.querySelector(".roll")
const holdBtn = document.querySelector(".hold")
const player0 = document.querySelector(".player-0")
const player1 = document.querySelector(".player-1")


// ///// start condition :: 
score0.textContent = 0 ; 
score1.textContent = 0 ; 
diceImg.classList.add("hidden")

let score = 0 ;
let activePlayer = 0 ;

let fixedScores = [0,0]


function switchPlayer (){
   score = 0 ;
         document.querySelector(`.current-score-${activePlayer}`).textContent = 0 
         activePlayer = activePlayer === 0 ? 1 : 0
        player0.classList.toggle("active")
        player1.classList.toggle("active")
}

///// roll functionnality ::: 

rollBtn.addEventListener("click" ,function(){
    const diceNumber = Math.trunc(Math.random()*6)+1  ///// 1 ===> 6
    diceImg.src = `dice-${diceNumber}.png`
    diceImg.classList.remove("hidden")

    if (diceNumber !==1) {
    //  score = score + diceNumber
    score+=diceNumber
    document.querySelector(`.current-score-${activePlayer}`).textContent = score
    } else {
     switchPlayer()
    }
  
})


//// hold functionnality ::: 

holdBtn.addEventListener("click",function(){
//  fixedScores[activePlayer] = fixedScores[activePlayer] + score ;
fixedScores[activePlayer] += score
document.querySelector(`.score-${activePlayer}`).textContent = fixedScores[activePlayer]

if (fixedScores[activePlayer] >= 20){
document.querySelector(`.player-${activePlayer}`).classList.add("winner")
}

else {
   switchPlayer()
}
})