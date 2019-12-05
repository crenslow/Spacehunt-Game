/* SPACE STATION 1 */

// each station has a different chance for winning credits

function Station1(credit)
{ 
    if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined){
        if(gameMap.contents(oldSpice.x, oldSpice.y).name == "SpaceStation1"){
            var playGameOfChance = Math.floor(Math.random() * Math.floor(3)); 
            if(playGameOfChance < 2) { 
                //if(confirm("You have been asked to play a game of chance. Would you like to play?")) { 
                   var winnings = Math.floor(Math.random() * Math.floor(200));
                   credit = credit + winnings; 
                   gameMap.remove(oldSpice.x, oldSpice.y);
                   alert("You've been asked to play a game of chance!"); 
                   alert("You have won " + winnings + " credit(s)!"); 
                   return [credit];
                //}
            }
        }
    }
    return [credit];
}
