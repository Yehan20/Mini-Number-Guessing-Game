/*
 there is maximum minumum number
 the winning number is generated randomly
 after use wins he can play again inputs get disabled
 after 5 attempts user looses the game
*/

// 
let min=1,max=20,winning_num=getWinningNumber(max,min),gusess=5;

// from the dom

const maxNumber =document.querySelector('.max-number');
const minNumber =document.querySelector('.min-number');
const input =document.querySelector('.input');
const findBtn= document.querySelector('#btn');
const game =document.querySelector('#game');
const result= document.querySelector('#result p');

minNumber.textContent=min;
maxNumber.textContent=max;

game.addEventListener('mousedown',function(e){
   
    if(e.target.classList.contains('find')){
        input.value='';
        window.location.reload();
        
    }
});

// making random 
function getWinningNumber(max,min){
   return (Math.floor(Math.random()*(max-min)+1+min));
};

//play again event
findBtn.addEventListener('click',function(e){
     let value=parseInt(input.value);

     if(isNaN(value) || value>max || value<min){
       message(`Enter a Number between ${min} and ${max}`,`red`);
      

     }
     else{
        if(value===winning_num){
       
          gameResult(true,`${input.value} is The correct Answer You Won`);
          document.querySelector('.confetti').style.display='block';
          document.querySelector('.congrats__text').style.display='block';
         
        }
        else{
            
            gusess-=1;
            message(`Answer wrong ${gusess} guesses left `,`red`);
            input.value='';
            if(gusess===0){
               gameResult(false,`You Loose Correct Answer Was  ${winning_num} `);
            
                
            }
        }
     }
});


function gameResult(won,msg){
    let color;
    won===true?color='green':color='red';
    input.disabled=true;
    findBtn.value='Play Agin';
    findBtn.classList.add('find');

    message(msg,color);
}

function message(msg,color){
    result.textContent=msg;
    result.style.color=color;
    input.style.outlineColor=color;
}
