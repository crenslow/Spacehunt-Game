/* SPACE STATION 3 */

/* MUSK TESLA STATION; buying energy with credits */

function Station3(energy, credit)
{ 
    if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined) {
          if(gameMap.contents(oldSpice.x, oldSpice.y).name == "MuskTeslaStation") {
	       if(confirm("Do you want to buy 100 energy for 100 credits?")) {
	            energy = energy + 100;
		    credit = credit - 100;
		    alert("Thanks for your purchase!");
	            gameMap.remove(oldSpice.x, oldSpice.y);
               }
	       return [energy, credit];
	   }
      }
      else {
           return [energy, credit];
      }
}
