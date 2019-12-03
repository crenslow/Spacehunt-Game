/* SPACE STATION 2 */

// each station has a different chance for winning credits

function Station2(credit)
{ 
    if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined){
        if(gameMap.contents(oldSpice.x, oldSpice.y).name == "SpaceStation2"){
            var playGameOfChance = Math.floor(Math.random() * Math.floor(5)); 
            if(playGameOfChance < 3) { 
                //if(confirm("You have been asked to play a game of chance. Would you like to play?")) { 
                   var winnings = Math.floor(Math.random() * Math.floor(200));
                   credit = credit + winnings; 
                   alert("You've been asked to play a game of chance!"); 
                   alert("You have won " + winnings + " credit(s)!"); 
                   return [credit];
                //}
            }
        }
    }
    return [credit];
}
