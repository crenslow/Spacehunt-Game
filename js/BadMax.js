//BadMax implementation
function BadMax(supplies, credits){
		//1 in 10 chance to encounter on a move
	var checkEncounter = Math.floor(Math.random() * 50);
	if(checkEncounter == 49){
			//if encounter, choose event to happen 20% blown up, 30% Boards, 50% fight off
		var Event = Math.floor(Math.random() * 100);
		if(Event < 20){
			//alert("You have encounterd BadMax. He has blown up your ship and killed everyone on board!");
			ctrecipe.GameOver("You have encounterd BadMax. He has blown up your ship and killed everyone on board!");
			return [0, 0];
		}
		else if(Event > 20 && Event < 50){
			alert("You have encounterd BadMax. BadMax has boarded your ship and taken half your credits and supplies");
			supplies = supplies / 2;
			credits = credits / 2;
			return [supplies, credits];
		}
		else if(Event > 50){
			alert("You have encounterd BadMax. Thankfully, you fought him off!");
			return [supplies, credits];
		}
		
	}
	return [supplies, credits];
		
}