function CelestialMap(found){
	if(found.isHidden === true) {//visible and not planet
		found.isHidden = false; //not successful the celestial can't be nothidden
		alert(found.objType + " add to CelestialMap");

	}

}