var scores, scoreRounds, activePlayer, gamePlaying, preScore;

init();

document.querySelector('.btn--roll').addEventListener('click', function() {
    
    if(gamePlaying) {
         //1. Random number
         var dice = Math.floor(Math.random() * 6) + 1;
    
         //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        //3. Update round score IF the rolled number was NOT a 1
        if (dice !== 1) {
        // Add score
        scoreRounds += dice;
        document.querySelector('#current--' + activePlayer).textContent = scoreRounds;
        } else {
        // Next player
        nextPlayer();
        }
    }   
});


document.querySelector('.btn--hold').addEventListener('click', function() {
    if(gamePlaying) {
      // Add CURRENT score to GLOBAL score
      scores[activePlayer] += scoreRounds;
      //score[activePlayer] = score[activePlayer] + scoreRounds;
    
      // Update the UI
      document.querySelector('#score--' + activePlayer).textContent =scores[activePlayer];
    
      // Check if player won the game
      if (scores[activePlayer] >= 10) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
       } else {
          // nextPlayer
          nextPlayer();
          }    
    } 
});


function nextPlayer() {
    // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        scoreRounds = 0;
        
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        //document.querySelector('.player--0').classList.remove('player--active');
        //document.querySelector('.player--1').classList.add('player--active');
        
        document.querySelector('.dice').style.display = 'none';  
};

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    scoreRounds = 0;
    gamePlaying = true;
    
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}
