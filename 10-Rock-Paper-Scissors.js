let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

UpdateScoreElement();


let result = '';
function playGame(playerMove){
    pickcomputerMove();
    if(playerMove === 'Scissors'){
        
if(computerMove ==='Rock'){
    result = 'lose';
} else if(computerMove === 'Paper'){
    result = 'win';
} else if(computerMove === 'Scissors'){
    result = 'tie';
}

} else if(playerMove === 'Paper'){
if(computerMove ==='Rock'){
    result = 'win';
} else if(computerMove === 'Paper'){
    result = 'tie';
} else if(computerMove === 'Scissors'){
    result = 'lose';
}
} else if(playerMove === 'Rock'){
if(computerMove ==='Rock'){
    result = 'tie';
} else if(computerMove === 'Paper'){
    result = 'lose';
} else if(computerMove === 'Scissors'){
    result = 'win';
}
}
if(result === 'win'){
score.wins++;
} else if(result === 'lose'){
score.losses++;
} else if(result === 'tie'){
score.ties++;
}
localStorage.setItem('score',(JSON.stringify(score)));
document.querySelector('.js-result').innerHTML = `You ${result}.`;
document.querySelector('.js-moves').innerHTML = ` You 
<img src="${playerMove}-emoji.png" alt="" class="image-move">
<img src="${computerMove}-emoji.png" alt="" class="image-move">
computer`;
UpdateScoreElement();    
}
function UpdateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`wins ${score.wins},losses 
${score.losses}, ties ${score.ties}`;

}
    let compuetrMove = '';

function pickcomputerMove(){            
    const randomNumber = Math.random(); 
if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
} else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissors';
}
}