function GameMode (params) {
    /* object contains the current mode of the game */
    /* mode: win, lose, etc */
    gameObj = {};
    gameObj.tickObjects = [];
    gameObj.isGameover = false;
    
    gameObj.GameWinner = function(reason) {
        alert(reason + "\nWinner!" );
        location.reload();
    }

    gameObj.GameOver = function(reason) {
        this.isGameover = true;
        alert(reason + "\nGame over!");
        location.reload();
    }
   
    gameObj.tick = function () {
        console.log("Using tick objects.")
        let i;
        for (i = 0; i < gameObj.tickObjects.length; ++i) {
            gameObj.tickObjects[i]();
        }
    }
    return gameObj;
}
