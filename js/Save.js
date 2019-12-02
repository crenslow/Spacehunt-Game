
function loadGame(saveName){
	var name = saveName;
	var save = JSON.parse(localStorage.getItem(name));
	if(save != undefined){
		window.oldSpice.x = save.shipX;
		window.oldSpice.y = save.shipY;
		window.oldSpice.energy = save.shipEnergy;
		window.oldSpice.supplies = save.shipSupplies;
		window.oldSpice.credits = save.shipCredit;
		window.oldSpice.engineLv = save.shipEngineLv;
		window.oldSpice.isDamaged = save.shipDamaged;
		window.oldSpice.normalPlay = save.shipNormalPlay;
		//window.gameMap = save.map;
		//PopulateMap(window.gameMap);
		//populateSavedGaze(save.gaze);
		window.gameMap.move(window.oldSpice.x, window.oldSpice.y);
        PopulateSavedMap( window.gameMap, save.artifactArr);
        window.gameMap.artifactArr = save.artifactArr.slice(0);
        gameData.artifactArr = save.artifactArr.slice(0);
		updateLevels();
		updateHeading();
		alert("Save game: " + name + " loaded!");
	}
	else{
		alert("No save file of that name or no save files exist. Creating new save.");
		
		
	}
	
	
	
}

function saveShip(gameData, oldSpice) {
    gameData.shipX           = oldSpice.x;
    gameData.shipY           = oldSpice.y;
    gameData.shipEnergy      = oldSpice.energy;
    gameData.shipSupplies    = oldSpice.supplies;
    gameData.shipCredit      = oldSpice.credit;
    gameData.shipEngineLv    = oldSpice.engineLv;
    gameData.shipDamaged     = oldSpice.isDamaged;
    gameData.shipNormalPlay  = oldSpice.normalPlay;
	gameData.shipHasReciple = oldSpice.recipe;
    gameData.artifactArr = gameMap.artifactArr.slice(0);

}
	
function saveMap(gameData, mapObj) {
	
}
