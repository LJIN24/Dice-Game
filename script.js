
let totalScore=document.getElementById('score--0')
let currentScore=document.getElementById('current--0')

const NewBtn=document.querySelector('.btn-new_game');
const RollBtn=document.querySelector('.btn-roll_Dice');
const HoldBtn=document.querySelector('.btn-hold');
const dice=document.querySelector('.dice');

let currentNumber = 0; 
let currentPlayer =0; 
let currentTotal=0;

RollBtn.addEventListener('click',()=>{
    const diceValue=Math.floor(Math.random()*6)+1//Math.random= 0<=x<1 우리는 1부터 6까지 숫자가 필요하니 6을 곱해준다.
    dice.src=`dice-${diceValue}.png`

    if (diceValue === 1 || diceValue === 2) {
        currentNumber = 0;
        switchPlayer();
    } else {
        currentNumber += diceValue;
        currentScore.textContent=currentNumber
       
    }

});

NewBtn.addEventListener('click',()=>{
    currentPlayer=0;
   document.getElementById('score--1').textContent='0';
   document.getElementById('score--0').textContent='0';
});

HoldBtn.addEventListener('click',()=>{
  const currentScoreValue=Number(currentScore.textContent);
  const totalScoreValue=Number(totalScore.textContent);
  const sumTotal=currentScoreValue+totalScoreValue

  totalScore.textContent=sumTotal;
  
  if(sumTotal>50){
    alert(`Player ${currentPlayer+1} wins!`);
    gameReset();
  }else{
    switchPlayer();
  }
});

gameReset=()=>{
    currentPlayer=0;
    document.getElementById('score--1').textContent='0';
    document.getElementById('score--0').textContent='0';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
}

switchPlayer=()=>{
    currentNumber=0;
    currentScore.textContent=currentNumber;
    
    if(currentPlayer===0){
        currentPlayer=1;
    }else{
      currentPlayer=0;
    }
    if(currentPlayer===0){
        currentScore=document.getElementById('current--0');
        totalScore=document.getElementById('score--0');
    }else{
        currentScore=document.getElementById('current--1');
        totalScore=document.getElementById('score--1');
    }
}

   

