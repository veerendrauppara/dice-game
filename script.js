var scores, diceCount, activePlayer, activeDiceValue

init();

function init() {
    scores = [0, 0];
    diceCount = 0;
    activePlayer = 0;

    document.querySelector('.player-score-0').textContent = scores[0];
    document.querySelector('.player-score-1').textContent = scores[1];
    document.querySelector('.player-0-rollcount').textContent = diceCount;
    document.querySelector('.player-1-rollcount').textContent = diceCount;

    document.querySelector('.dice-imgs').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-name-0').textContent = 'Player-1';
    document.querySelector('.player-name-1').textContent = 'Player-2';
    document.querySelector('.rollDiceButton').style.display = 'block';
    document.querySelector('.holdScoreButton').style.display = 'block';
}

document.querySelector('.rollDiceButton').addEventListener('click', function() {
    activeDiceValue = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice-imgs');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + activeDiceValue + '.png';

    if (activeDiceValue != 1) {
        diceCount += activeDiceValue;
        if (activePlayer == 0) {
            document.querySelector('.player-0-rollcount').textContent = diceCount;
        } else {
            document.querySelector('.player-1-rollcount').textContent = diceCount;
        }
    } else {
        diceCount = 0;
        if (activePlayer == 0) {
            document.querySelector('.player-0-rollcount').textContent = diceCount;
            activePlayer = 1;
        } else {
            activePlayer = 0;
            document.querySelector('.player-1-rollcount').textContent = diceCount;
        }
        // if(activePlayer == 0){

        // }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
});

document.querySelector('.holdScoreButton').addEventListener('click', function() {
    scores[activePlayer] += diceCount;
    diceCount = 0;
    document.querySelector('.player-score-0').textContent = scores[0];
    document.querySelector('.player-score-1').textContent = scores[1];
    document.querySelector('.player-0-rollcount').textContent = diceCount;
    document.querySelector('.player-1-rollcount').textContent = diceCount;
    document.querySelector('.dice-imgs').style.display = 'none';
    if (scores[activePlayer] > 20) {
        document.querySelector('.player-name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.rollDiceButton').style.display = 'none';
        document.querySelector('.holdScoreButton').style.display = 'none';
    } else {
        if (activePlayer == 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
})
document.querySelector('.newGameButton').addEventListener('click', init)