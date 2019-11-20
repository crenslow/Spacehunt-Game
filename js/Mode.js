function GameMode (params) {
    /* object contains the current mode of the game */
    /* mode: win, lose, etc */
    gameObj = {};
    gameObj.tickObjects = [];
    gameObj.isGameover = false;
    
    // win the game; the message that displays when player wins
    // the game
    gameObj.GameWinner = function(reason) {
        alert(reason + "\nWinner!" );
        location.reload();
    }
    
    // lose the game; the message that displays when player loses 
    // the game
    gameObj.GameOver = function(reason) {
        this.isGameover = true;
        alert(reason + "\nGame over!");
        location.reload();
    }
   
    // could be discarded; was used for testing
    gameObj.tick = function () {
        console.log("Using tick objects.")
        let i;
        for (i = 0; i < gameObj.tickObjects.length; ++i) {
            gameObj.tickObjects[i]();
        }
    }
    return gameObj;
}
