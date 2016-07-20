var currentPlayerSymbol = 'X';
var currentPlayerClass = 'player1Marker';
var xGameTotal = 0;
var oGameTotal = 0;
var winsArray = [7, 56, 448, 73, 146, 292, 273, 84]; // Wins condition values
var player1Name = '';
var player2Name = '';
var player1Symbol = 'X';
var player2Symbol = 'O';
var player1 = {
    name: '',
    symbol: 'X',
    class: 'player1Marker',
    wins: 0
}
var player2 = {
    name: '',
    symbol: 'O',
    class: 'player2Marker',
    wins: 0
};

var currentPlayer = player1;

function initialize()
{
    // Get the player names
    // player1Name = prompt('Please enter player 1 name');
    // player2Name = prompt('Please enter player 2 name');
    player1.name = 'Parker';
    player2.name = 'Bob';

    // Set the names in the score boxes.
    document.getElementById('player1Name').innerHTML = player1.name;
    document.getElementById('player2Name').innerHTML = player2.name;

    drawSymbols();
}

function drawSymbols()
{
    document.getElementById('player1Icon').innerHTML = player1.symbol;
    document.getElementById('player2Icon').innerHTML = player2.symbol;

    drawScore();
}

function drawScore()
{
    document.getElementById('player1Wins').innerHTML = 'Wins: ' + player1.wins;
    document.getElementById('player2Wins').innerHTML = 'Wins: ' + player2.wins;
}

function playerMoved(id, value)
{
    // place a marker
    changeMarker(id);

    // update player total
    updatePlayerTotal(value);

    // check for winner
    checkForWinner(currentPlayerSymbol === 'X' ? xGameTotal : oGameTotal);

    // switch players
    changePlayer();
}

function changeMarker(box)
{
    box.innerHTML = currentPlayerSymbol;
    box.className = box.className + ' ' + currentPlayerClass;
}

function changePlayer()
{
    // Swap the current player.
    currentPlayerSymbol = currentPlayerSymbol === 'X' ? 'O' : 'X';
    currentPlayerClass = currentPlayerClass === 'player1Marker' ? 'player2Marker' : 'player1Marker';
}

function updatePlayerTotal(value)
{
    if (currentPlayerSymbol === 'X')
    {
        xGameTotal += value;
    }
    else
    {
        oGameTotal += value;
    }

    //alert(xGameTotal + ' ' + oGameTotal);
}

function checkForWinner(score)
{
    for (var i = 0; i < winsArray.length; i++)
    {
        //compare the wins Array occurrence bitwise to the current score //
        if ((winsArray[i] & score) === winsArray[i])
        {
            console.log('winner');
            return true; //bitwise match - we have a winner!
        }
    }

    return false;
}