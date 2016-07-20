var currentPlayer = 'X';
var xGameTotal = 0;
var oGameTotal = 0;
var winsArray = [7, 56, 448, 73, 146, 292, 273, 84]; // Wins condition values

function initialize()
{

}

function playerMoved(id, value)
{
    //alert(id + ' ' + value);

    // place a marker
    changeMarker(id);

    // update player total
    updatePlayerTotal(value);

    // check for winner
    checkForWinner(currentPlayer === 'X' ? xGameTotal : oGameTotal);

    // switch players
    changePlayer();
}

function changeMarker(box)
{
    box.innerHTML = currentPlayer === 'X' ? 'X' : 'O';
}

function changePlayer()
{
    // Swap the current player.
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updatePlayerTotal(value)
{
    if (currentPlayer === 'X')
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