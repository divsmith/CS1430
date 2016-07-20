var winsArray = [7, 56, 448, 73, 146, 292, 273, 84]; // Wins condition values
var totalGameMoves = 0;
var catWins = 0;
var player1 = {
    name: '',
    symbol: 'X',
    class: 'player1Marker',
    hoverID: 'player1Hover',
    gameTotal: 0,
    wins: 0
}
var player2 = {
    name: '',
    symbol: 'O',
    class: 'player2Marker',
    hoverID: 'player2Hover',
    gameTotal: 0,
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
    if (changeMarker(id))
    {
        // update player total
        updatePlayerTotal(value);

        // update total game moves;
        totalGameMoves++;

        // check for winner
        if (checkForWinner(currentPlayer.gameTotal))
        {
            currentPlayer.wins++;
            alert(currentPlayer.name + ' is the winner!');
            resetBoard();
            swapPlayerSymbols();
            drawSymbols();
        }
        else if (totalGameMoves >= 9)
        {
            catWins++;
            alert('Cat wins! Total cat wins: ' + catWins);
            resetBoard();
            swapPlayerSymbols();
            drawSymbols();
        }
        else
        {
            // switch players
            changeCurrentPlayer();
        }
    }
}

function resetBoard()
{
    var cells = document.getElementsByClassName('cell');

    player1.gameTotal = 0;
    player2.gameTotal = 0;

    for (var i = 0; i < cells.length; i++)
    {
        cells[i].innerHTML = '';
        cells[i].className = 'cell';
    }

    totalGameMoves = 0;
}

function swapPlayerSymbols()
{
    var tempSymbol = player1.symbol;
    player1.symbol = player2.symbol;
    player2.symbol = tempSymbol;

    currentPlayer = player1.symbol === 'X' ? player1 : player2;
}

function changeMarker(box)
{
    if (box.innerHTML === '')
    {
        box.innerHTML = currentPlayer.symbol;
        box.className = box.className + ' ' + currentPlayer.class;
        return true;
    }
    else if (box.id === currentPlayer.hoverID && box.innerHTML === currentPlayer.symbol)
    {
        box.id = '';
        box.className = box.className + ' ' + currentPlayer.class;
        return true;
    }

    return false;
}

function changeCurrentPlayer()
{
    // Swap the current player.
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function updatePlayerTotal(value)
{
    currentPlayer.gameTotal += value;
}

function checkForWinner(score)
{
    for (var i = 0; i < winsArray.length; i++)
    {
        //compare the wins Array occurrence bitwise to the current score //
        if ((winsArray[i] & score) === winsArray[i])
        {
            return true; //bitwise match - we have a winner!
        }
    }

    return false;
}

function mouseOver(box)
{
    if (box.innerHTML === '')
    {
        box.innerHTML = currentPlayer.symbol;
        box.id = currentPlayer.hoverID;
    }
}

function mouseOff(box)
{
    if (box.id === currentPlayer.hoverID)
    {
        box.innerHTML = '';
        box.id = '';
    }
}