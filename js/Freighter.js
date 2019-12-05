//<!-- SH-10 Encountering an Abandoned Freighter  Low  -->
//<!-- Storys: As a player, I want to encounter an abandoned
 //       Freighter drifting in space so I can take on additional supplies and energy  -->

function Freighter(energy, supplies)
{
	if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined){
		if(gameMap.contents(oldSpice.x, oldSpice.y).name == "AbFreighter"){
			alert("You encounter an abandoned freighter. You salvage its remaining energy and supplies!");
			energy = energy + 100;
			supplies = supplies + 10;
			gameMap.remove(oldSpice.x, oldSpice.y);
			return [energy, supplies];

		}
	}
	else{
		return [energy, supplies];

	}



}

//<!-- call fucntion -->
//var obj = Freighter(energy,supplies)
//energy = obj.a1;
//supplies = obj.b1;
//energy and supplies is global variable
