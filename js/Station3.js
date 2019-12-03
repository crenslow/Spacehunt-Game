/* SPACE STATION 3 */

// each station has a different chance for winning credits

function Station3(credit)
{ 
    if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined){
        if(gameMap.contents(oldSpice.x, oldSpice.y).name == "SpaceStation3"){
            var playGameOfChance = Math.floor(Math.random() * Math.floor(9)); 
            if(playGameOfChance < 7) { 
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
