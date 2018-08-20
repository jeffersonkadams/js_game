/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//textContent instead of innerHTML because I'm not adding any extra HTML and it isn't necessary.

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//https://developer.mozilla.org/en-US/docs/Web/Events
document.querySelector('.btn-roll').addEventListener('click', function() {
  //calculate number
  var dice = Math.floor(Math.random() * 6) + 1; //random number from 1-6
  //display the number
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block'; //shows the dice #
  diceDOM.src = 'dice-' + dice + '.png';

  //update the round score as long as a 1 was not rolled
  if (dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //my first ternary operator!
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  }
});







//https://developer.mozilla.org/en-US/docs/Web/Events
