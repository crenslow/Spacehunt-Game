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