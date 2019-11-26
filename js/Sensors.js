class Sensor {
    constructor( ship, map ) {
        this.map = map;
        this.ship = ship;
        this.level = 1;            
        this.ScanCP = 2;
    }
    
    use () {
        this.ship.supplies -= 2;        // consume 2% of supplies
        
    }

    getInfo () {
     
    }
    
    upgrade () {
        if ( this.level == 1 && this.ship.credit > 100 ) {
            this.ship.credit -= 100;
            this.level = 2;
            this.ScanCP = 5;
        }
    }
}




/*
class Sensor {
    constructor( ship, map ) {
        this.ship = ship;           //ship
        this.map = map;             //gameMap
        this.level = 1;             // sensor level
        this.ScanCP = 2;
    }
    getInfo () {
        if ( this.level == 1 ) {
	        return 'Basic Sensor';
        }
        else {
            return 'Enhanced Sensor';
        }
    }
    upgrade () {
    	if ( this.level == 1 && this.ship.credit > 100 ) {
            this.ship.credit -= 100;
            this.level = 2;
            this.ScanCP = 5;
        }
        else
            addMessage("you cannot update")
    }
    use(){
    	this.ship.supplies = this.ship.supplies-2;
    	if(this.level == 1){
       		var i;
		var j;
        	var k;
        	var nearCP[];
        	var count;
       		var anyFound;
        	for(i=this.ship.x-2;i<this.ship.x+2;i++){
		  for(j=this.ship.y-2;j<this.ship.y+2;j++){
          		  nearCP[count++] = {
           			   x: i,
           			   y: j
           		 }     
       		  }
		}
       		for(k =0;k<nearCP.length;k++){
         		var searchX = nearCP[k].x
          		var searchY = nearCP[k].y
          		var duplicate = false;
        	        var found = this.map.map[searchX][searchY];
        		if(found != undefined){
          		    anyFound =1;
         		    if(found.objType === "Planet"){
                                addMessage(( "Planet " + found.name + " at (" + searchX + ", " + searchY + ") " + " already in gazetteer" );
                            }
                        else
                                addMessage( found.objType + " at (" + searchX + ", " + searchY + ") " + "already in gazetteer" );
                                duplicate = true;
                                break;
                        }
                       if(!duplicate){
                           if ( found.objType === "Planet" ){
            		       addMessage( "Planet " + found.name + " found at (" + searchX + ", " + searchY + ")" );
                           }
                       else
                             addMessage( found.objType + " found at (" + searchX + ", " + searchY + ")" );
         
                            // add location of celestial obj found to Celestial Gazetteer
                            //gazePopulate( found, searchX, searchY, true );
                       }
		 }
                 if(!anyFound){
                      addMessage("There is nothing found in the current CP!");
                 }
                 return nearCP;
      }
      if(this.level == 2){
       		var i;
		var j;
        	var k;
        	var nearCP[];
        	var count;
       		var anyFound;
     		for(i=ship.x-5;i<ship.x+5;i++){
                    for(j=ship.y-5;j<ship.y+5;j++){
             		  if(i==ship.x-5 && j==ship.y+4)
				continue;
			  if(i==ship.x-5 &&j==ship.y+5)
				continue;
			  if(i==ship.x-5 &&j==ship.y-4)
				continue;
			  if(i==ship.x-5 &&j==ship.y-5)
				continue;
			  if(i==ship.x+5 && j==ship.y+4)
				continue;
			  if(i==ship.x+5 &&j==ship.y+5)
				continue;
			  if(i==ship.x+5 &&j==ship.y-4)
				continue;
			  if(i==ship.x+5 &&j==ship.y-5)
				continue;
			  if(i==ship.x-4 &&j==ship.y+5)
				continue;
			  if(i==ship.x-4 &&j==ship.y-5)
				continue;
			  if(i==ship.x+4 &&j==ship.y+5)
				continue;
			  if(i==ship.x+4 &&j==ship.y-5)
				continue;
             	          nearCP[count++] = {
           		  	x: i,
          			y: j
          		 }      
		  }
              }
              for(k =0;k<nearCP.length;k++){
         		var searchX = nearCP[k].x
          		var searchY = nearCP[k].y
          		var duplicate = false;
        	        var found = this.map.map[searchX][searchY];
        		if(found != undefined){
          		    anyFound =1;
         		    if(found.objType === "Planet"){
                                addMessage(( "Planet " + found.name + " at (" + searchX + ", " + searchY + ") " + " already in gazetteer" );
                            }
                        else
                                addMessage( found.objType + " at (" + searchX + ", " + searchY + ") " + "already in gazetteer" );
                                duplicate = true;
                                break;
                        }
                       if(!duplicate){
                           if ( found.objType === "Planet" ){
            		       addMessage( "Planet " + found.name + " found at (" + searchX + ", " + searchY + ")" );
                           }
                       else
                             addMessage( found.objType + " found at (" + searchX + ", " + searchY + ")" );
         
                            // add location of celestial obj found to Celestial Gazetteer
                            //gazePopulate( found, searchX, searchY, true );
                       }
		 }
                 if(!anyFound){
                      addMessage("There is nothing found in the current CP!");
                 }
                 return nearCP;
	  }		
     }
 }
*/
