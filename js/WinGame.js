//Win the game when have recipe and location is eniac
//Recipe found on ryzen until pentiums are added

function checkLocation(){
	
	//alert(oldSpice.x);
	//alert(oldSpice.y);
	if(gameMap.contents(oldSpice.x, oldSpice.y) != undefined){
		if(gameMap.contents(oldSpice.x, oldSpice.y).name == "Ryzen"){			
			oldSpice.recipe = true;
			alert("You got the recipe! Now return to Eniac");
		}
		if(gameMap.contents(oldSpice.x, oldSpice.y).name == "Eniac" && oldSpice.recipe == 1){
			window.location.href = 'EndScreen.html';
		}
		
		
	}
	




}