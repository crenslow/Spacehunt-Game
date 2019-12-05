function CelestialMap(map,found,x,y){
	if(found.isHidden === true) {//visible and not planet
		found.isHidden = false; //not successful the celestial can't be nothidden
		
             map.add(found,x,y);
		saveMap( window.gameData, found,x,y );
		
   		alert(found.objType + " add to CelestialMap");
		
	}
}

