function saveGame(saveName, gameData, gameMap, oldSpice){
	class Save{
		constructor(Name,Data, Map, Ship) {
			this.name = Name;
			this.data = Data;
			this.map = Map;
			this.ship = Ship;
		}
	}
	save = new Save(saveName, gameData, gameMap, oldSpice);

	localStorage.setItem(saveName, JSON.stringify(save));
	
	
	
}
function loadGame(saveName){
	var name = saveName
	var save = JSON.parse(localStorage.getItem(name));
	window.gameData = save.data;
	window.gameMap = save.map;
	window.oldSpice = save.ship;
	
	
	
	
}

/* saveShip and saveMap are what I have in my version. So, I'm putting them here 
to check to see if it fixes our bugs. they're called in other files */
function saveShip(gameData, oldSpice) {
    gameData.shipX           = oldSpice.x;
    gameData.shipY           = oldSpice.y;
    gameData.shipEnergy      = oldSpice.energy;
    gameData.shipSupplies    = oldSpice.supplies;
    gameData.shipCredit      = oldSpice.credit;
    gameData.shipEngineLv    = oldSpice.engineLv;
    gameData.shipDamaged     = oldSpice.isDamaged;
    gameData.shipNormalPlay  = oldSpice.normalPlay;
}
	
function saveMap(gameData, mapObj, objX, objY) {
	
}
